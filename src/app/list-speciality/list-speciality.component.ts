import { Component, OnInit } from '@angular/core';
import {SpecialiteService} from '../services/specialite.service';
import {Specialite} from '../models/specialite';

@Component({
  selector: 'app-list-speciality',
  templateUrl: './list-speciality.component.html',
  styleUrls: ['./list-speciality.component.css']
})
export class ListSpecialityComponent implements OnInit {
specialities:Specialite[];
term:string;
show:boolean=false;
  constructor(private specialityService:SpecialiteService) { }

  ngOnInit(): void {
    this.getAllSpeciality();
  }
  getAllSpeciality(){
    this.specialityService.getAll().subscribe(
      data=>{
        this.specialities=data;
        console.log(this.specialities)
      }
    )
  }
  delete(id:number){
    this.specialityService.delete(id).subscribe();
  }
showdisc(){
    this.show=!this.show
}
}
