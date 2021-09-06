import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenService} from '../../services/token.service';
import {SignupServiceService} from '../../services/signup-service.service';
import {OffreService} from '../../services/offre.service';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DocumentService} from '../../services/document.service';
import {Offre} from '../../models/offre';
import {Document} from '../../models/document';


@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {

  offre: Offre;
  documents: Document[];
  id : number;
  isLinear = false;
  int: number;
  req:number=0;
  public clicked1=true;
  public clicked2=false;
  public clicked3=false;




  constructor(private route: Router,
              private routeActive : ActivatedRoute,
              private Token: TokenService,
              public sign: SignupServiceService,
              private router: ActivatedRoute,
              public offreService: OffreService,
              private toastr: ToastrService,
              public documentService: DocumentService,
              private _formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {

    this.getOffer();
  }

  getOffer(){
    this.routeActive.params.subscribe(
      (params) => {
        this.id = params.id;
      })
    this.offreService.getbyId(this.id).subscribe(
      data=>{
        console.log(data)
        this.offre=data
      }
    );

  }
  affiche1(){
    this.clicked1=!this.clicked1;
    this.clicked2=this.clicked3=false;
  }
  affiche2(){
    this.clicked2=!this.clicked2;
    this.clicked1=this.clicked3=false;
  }
  affiche3(){
    this.clicked3=!this.clicked3;
    this.clicked1=this.clicked2=false;
  }
  getnumb(type:string){
    this.req=0;
    for (let doc of this.offre.documents){
      if(doc.type==type) {
        this.req = this.req + 1;
      }
    }
    return this.req
  }
}