import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenService} from '../../services/token.service';
import {SignupServiceService} from '../../services/signup-service.service';
import {OffreService} from '../../services/offre.service';
import {Document} from '../../models/document';
import {DocumentService} from '../../services/document.service';
import {ToastrService} from 'ngx-toastr';
import {Education} from '../../models/education';
import {EducationService} from '../../services/education.service';
import {CondidatoffreService} from '../../services/condidatoffre.service';
import {Offre} from '../../models/offre';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {

   offre: Offre;
   documents: Document[];
   id : number;



  constructor(private route: Router,
              private routeActive : ActivatedRoute,
              private Token: TokenService,
              public sign: SignupServiceService,
              private router: ActivatedRoute,
              public offreService: OffreService,
              private toastr: ToastrService,
              private _formBuilder: FormBuilder,
              public documentService: DocumentService) {}


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
}
