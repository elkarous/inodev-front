import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor( private http : HttpClient) { }

  ngOnInit(): void {
  }
login(){
   this.http.get('http://localhost:8081/oauth2/callback/facebook').subscribe()
}
}
