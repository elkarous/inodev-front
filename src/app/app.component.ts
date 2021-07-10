import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inodev';
  public c: string;
  public cat(ca: string){
    this.c = ca;
    console.log(this.c);
  }
}
