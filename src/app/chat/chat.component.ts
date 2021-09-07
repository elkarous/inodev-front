import {Component, HostListener, Input, OnInit} from '@angular/core';

import {Message} from '../models/Message';
import {MessageServiceService} from '../services/message-service.service';
import {ChannelServiceService} from '../services/channel-service.service';
import { RxStompService } from '@stomp/ng2-stompjs';
import {Condidat} from '../models/condidat';
import {TokenService} from '../services/token.service';
import {SignupServiceService} from '../services/signup-service.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  filteredMessages: Array<Message> = [];
   newMessage: string;
   channel: string;
  receiver: string;
  @Input()
  username: string;
 id: any;
condidate:Condidat

  constructor(private stompService: RxStompService,
              private messageService: MessageServiceService,
              private Token: TokenService,
              public sign: SignupServiceService,
              private channelService: ChannelServiceService) { }

  ngOnInit() {
    this.id = this.Token.getInfos().id;

    this.sign.get(this.id).subscribe((res: Condidat) => {

      this.username = res.firstName;
    });
    this.channelService.getChannel().subscribe(channel => {
      this.channel = channel;
      this.filterMessages();
    });

    this.messageService.getMessages().subscribe(messages => {
      this.filterMessages();
    });
  }
  @HostListener('window:unload', ['$event'])
  onUnload() {

  }

  onReceiverChange(event) {
    this.receiver = event;
  }
  sendMessage() {
    if (this.newMessage) {
      this.stompService.publish({
        destination: '/app/messages', body:
          JSON.stringify({
            'channel': this.channel,
            'sender': this.username,
            'content': this.newMessage
          })
      });
      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  filterMessages() {
    this.filteredMessages = this.messageService.filterMessages(this.channel);
    this.scrollToBottom();
  }

  scrollToBottom() {
    const msgContainer = document.getElementById('msg-container');
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }
}
