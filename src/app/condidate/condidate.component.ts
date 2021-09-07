import { Component, OnInit } from '@angular/core';
import {Offre} from '../models/offre';
import {OffreService} from '../services/offre.service';
import {CondidatOffre} from '../models/CondidatOffre';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-condidate',
  templateUrl: './condidate.component.html',
  styleUrls: ['./condidate.component.css']
})
export class CondidateComponent implements OnInit {
  show:boolean=false;
  subs:Offre[];
  acronym:string;
condidates:CondidatOffre[];
  constructor(private specialityService:OffreService,
              private toaster:ToastrService) { }

  ngOnInit(): void {
    this.getAllSpeciality();


  }
  getAllSpeciality(){
    this.specialityService.getAll().subscribe(
      data=>{
        this.subs=data.sort(this.sortBynote)
        console.log(this.subs)
      }
    )
  }

getByAcronym(acronym:string){
    this.acronym=acronym;
    this.specialityService.getCandidates(acronym).subscribe(
      data=>{
        this.condidates=data;

      }
    )
  this.show=true
}
 sortBynote( a, b ) {
    if ( a.note < b.note ){
      return -1;
    }
    if ( a.note > b.note ){
      return 1;
    }
    return 0;
  }
  update(application:CondidatOffre){
    this.specialityService.updatApplication(application).subscribe(data=>
    {
      this.toaster.success("Register done")
    })
  }
}
