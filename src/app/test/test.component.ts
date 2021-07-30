import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
show :boolean
  list:string[]

  constructor() { }

  ngOnInit(): void {
  this.show=true
    this.list=[
      "Mahdi",
      "Elkilani",
      "Saleh",
    ]  }

  hide(){
  this.show=!this.show;
  }
}
