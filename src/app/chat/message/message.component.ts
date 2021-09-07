import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/Message';
import {MessageServiceService} from '../../services/message-service.service';
import {ChannelServiceService} from '../../services/channel-service.service';
import {RxStompService} from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

   filteredMessages: Array<Message> = [];
   newMessage: string;
   channel: string;

  @Input()
   username: string;

  constructor(private stompService: RxStompService,
              private messageService: MessageServiceService,
              private channelService: ChannelServiceService) { }

  ngOnInit() {
    this.channelService.getChannel().subscribe(channel => {
      this.channel = channel;
      this.filterMessages();
    });

    this.messageService.getMessages().subscribe(messages => {
      this.filterMessages();
    });
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
