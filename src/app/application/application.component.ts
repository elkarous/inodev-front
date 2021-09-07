import { Component, OnInit } from '@angular/core';
import {CondidatoffreService} from '../services/condidatoffre.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OffreService} from '../services/offre.service';
import {CondidatOffre} from '../models/CondidatOffre';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private offerService:OffreService,
              private router:ActivatedRoute,
              private toaster:ToastrService) { }
id:number
  application:CondidatOffre;
  score:number=0;
  offer:string
  ngOnInit(): void {
this.offer=this.router.snapshot.params.offer;
   this.id=this.router.snapshot.params.id;
   this.getApplication();
    this.score=this.application.note;

  }


getApplication(){
    this.offerService.getCandidatOffer(this.id).subscribe(data=>
    this.application=data)
  }
  update(){
    this.offerService.updatApplication(this.application).subscribe(data=>
    {
this.toaster.success("Register done")
    })
}
}
