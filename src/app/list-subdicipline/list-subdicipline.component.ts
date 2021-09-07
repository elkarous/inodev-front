import { Component, OnInit } from '@angular/core';
import {Specialite} from '../models/specialite';
import {SpecialiteService} from '../services/specialite.service';
import {SubDecipline} from '../models/subDecipline';
import {OffreService} from '../services/offre.service';
import {Offre} from '../models/offre';

@Component({
  selector: 'app-list-subdicipline',
  templateUrl: './list-subdicipline.component.html',
  styleUrls: ['./list-subdicipline.component.css']
})
export class ListSubdiciplineComponent implements OnInit {
  subs:Offre[];
  offer:Offre;
  constructor(private specialityService:OffreService) { }

  ngOnInit(): void {
    this.getAllSpeciality();
  }
  getAllSpeciality(){
    this.specialityService.getAll().subscribe(
      data=>{
        this.subs=data;
        console.log(this.subs)
      }
    )
  }


}
