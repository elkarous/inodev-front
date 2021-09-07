import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Message} from '../models/Message';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private messages: Array<Message> = [];
  private msgs = new Subject<Array<Message>>();

  constructor(private http: HttpClient) { }

  pushMessage(message: Message) {
    this.messages.push(message);
    this.msgs.next(this.messages);
  }

  filterMessages(channel: string): Array<Message> {
    return this.messages.filter(message => channel === message.channel)
      .sort((m1, m2) => {
        if (m1.timestamp > m2.timestamp) {
          return 1;
        }

        return -1;
      });
  }

  sendReadReceipt(channelId: string, username: string) {
    this.http.post(`${environment.baseUrl}/messages/`, {
      channel: channelId,
      username: username
    });
  }

  getMessages(): Observable<any> {
    return this.msgs.asObservable();
  }

}
