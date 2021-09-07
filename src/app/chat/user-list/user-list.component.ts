import {Component, EventEmitter, OnInit, Output, HostListener, Input} from '@angular/core';
import {ChannelServiceService} from '../../services/channel-service.service';
import {MessageServiceService} from '../../services/message-service.service';
import {SignupServiceService} from '../../services/signup-service.service';
import {Condidat} from '../../models/condidat';
import { RxStompService } from '@stomp/ng2-stompjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import {Message} from '../../models/Message';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  NEW_USER_LIFETIME: number = 1000 * 5;



  @Output() receiverUpdated = new EventEmitter<string>();
  @Input() username: string;
  users: Condidat[] = [];
  highlightedUsers: Array<string> = [];
  newConnectedUsers: Array<string> = [];
  channel: string;
  receiver: string;
  topicSubscription;
  constructor(private userService: SignupServiceService, private stompService: RxStompService,
              private channelService: ChannelServiceService, private snackBar: MatSnackBar,
              private messageService: MessageServiceService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      (res: Condidat[]) => {
        this.users = res;
        this.initUserEvents();
      }
    );

    this.channelService.getChannel().subscribe(channel => this.channel = channel);
  }

  @HostListener('window:focus', [])
  sendReadReceipt() {
    if (this.channel != null && this.receiver != null) {
      this.messageService.sendReadReceipt(this.channel, this.receiver);
    }
  }

  startChatWithUser(user:Condidat) {
    const channelId = ChannelServiceService.createChannel(this.username, user.firstName);
    this.channelService.refreshChannel(channelId);
    this.receiver = user.firstName;
    this.highlightedUsers = this.highlightedUsers.filter(u => u !== user.firstName);
    this.receiverUpdated.emit(user.firstName);
    this.messageService.sendReadReceipt(channelId, user.firstName);
  }

  getOtherUsers(): Array<Condidat> {
    return this.users.filter(user => user.firstName !== this.username);
  }

  getUserItemClass(user:Condidat): string {
    let classes: string = 'user-item';
    if (user.firstName === this.receiver) {
      classes += ' current-chat-user ';
    }

    if (this.highlightedUsers.indexOf(user.firstName) >= 0) {
      classes += ' new-message';
    }

    if (this.newConnectedUsers.indexOf(user.firstName) >= 0) {
      classes += ' new-user';
    }

    if (!user.connected) {
      classes += ' disconnected-user';
    }

    return classes;
  }

  initUserEvents() {
    this.stompService.watch('/channel/login').subscribe(res => {
      const data: Condidat = JSON.parse(res.body);
      if (data.firstName !== this.username) {
        this.newConnectedUsers.push(data.firstName);
        setTimeout((
          function () {
            this.removeNewUserBackground(data.firstName);
          }
        ).bind(this), this.NEW_USER_LIFETIME);
        this.users = this.users.filter(item => item.firstName !== data.firstName);
        this.users.push(data);
        this.subscribeToOtherUser(data);
      }
    });

    this.stompService.watch('/channel/logout').subscribe(res => {
      const data: Condidat = JSON.parse(res.body);
      this.users = this.users.filter(item => item.firstName !== data.firstName);
      this.users.push(data);
      const channelId = ChannelServiceService.createChannel(this.username, data.firstName);
      if (this.channel === channelId) {
        this.receiverUpdated.emit('');
        this.channelService.removeChannel();
      }
    });

    this.subscribeToOtherUsers(this.users, this.username);
  }

  removeNewUserBackground(username) {
    this.newConnectedUsers = this.newConnectedUsers.filter(u => u !== username);
  }

  subscribeToOtherUsers(users, username) {
    const filteredUsers: Array<any> = users.filter(user => username !== user.username);
    filteredUsers.forEach(user => this.subscribeToOtherUser(user));
  }

  subscribeToOtherUser(otherUser): string {
    const channelId = ChannelServiceService.createChannel(this.username, otherUser.username);
    this.stompService.watch(`/channel/chat/${channelId}`).subscribe(res => {
      const data: Message = JSON.parse(res.body);
      this.messageService.pushMessage(data);

      if (data.channel !== this.channel) {
        this.showNotification(data);
      } else {
        // send read receipt for the channel
        this.messageService.sendReadReceipt(this.channel, otherUser.username);
      }
    });

    return channelId;
  }

  showNotification(message: Message) {
    const snackBarRef = this.snackBar.open('New message from ' + message.sender, 'Show', { duration: 3000 });
    this.highlightedUsers.push(message.sender);
    snackBarRef.onAction().subscribe(() => {
      this.receiver = message.sender;
      this.receiverUpdated.emit(message.sender);
      this.channel = ChannelServiceService.createChannel(this.username, message.sender);
      this.channelService.refreshChannel(this.channel);
    });
  }

}
