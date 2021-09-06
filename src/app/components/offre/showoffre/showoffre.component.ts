import { Component, OnInit } from '@angular/core';
import {OffreService} from '../../../services/offre.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SpecialiteService} from '../../../services/specialite.service';
import {TokenService} from '../../../services/token.service';
import {CondidatoffreService} from '../../../services/condidatoffre.service';
import {ToastrService} from 'ngx-toastr';
import {Document} from '../../../models/document';
import {DocumentService} from '../../../services/document.service';
import {Skills} from '../../../models/skills';
import {SkillsService} from '../../../services/skills.service';
import {Offre} from '../../../models/offre';

@Component({
  selector: 'app-showoffre',
  templateUrl: './showoffre.component.html',
  styleUrls: ['./showoffre.component.css']
})
export class ShowoffreComponent implements OnInit {
  public offre: Offre;
  public s: any;
  public exist: number;
  public ds = 0;
  public d = 1;
  public az: string;
  public id: number;
  public skills: any;
  public clicked1=false;
  public clicked2=false;
  public clicked3=false;
  public mouse1="#ff0440";


  constructor(public route: ActivatedRoute,
              public router: Router,
              public spec: SpecialiteService,
              public tok: TokenService,
              private toastr: ToastrService,
              public co: CondidatoffreService,
              public offreService: OffreService,
              public srve: SkillsService,
              private srv: DocumentService) { }

  ngOnInit(): void {
this.getOffer();


    this.spec.getAll().subscribe(res => {
      this.s = res;
    });
    this.co.exist(this.id).subscribe((aa: number) => {
      console.log(aa);
      this.exist = aa;
    });

  }
  all(){
    this.srve.skillsoffre(this.id)
      .subscribe((res: Skills[]) => this.skills = res);
  }
  apply()
  {
    window.location.reload();
    this.co.Save(this.id, 1).subscribe(a => {
      console.log(a);
    });
    this.toastr.success('Apply Successfully !!', 'DELETE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  annuler() {
    if (window.confirm('Are sure you want to Annuler Apply ?')) {
      window.location.reload();
      this.co.delete(this.id).subscribe(a => {
        console.log(a);
        this.ngOnInit();
      });
      this.toastr.error('Apply Annuled !!', 'DELETE', {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      });
    }
  }
  getOffer() {

    this.route.params.subscribe(
      (params) => {
        this.id = params.id;

      })
    this.offreService.getbyId(this.id).subscribe(
      data=>{
        console.log(data)
        this.offre=data
      }
    );

    console.log(this.offre);

  }
  affiche1(){
    this.clicked1=!this.clicked1;
    this.clicked2=this.clicked2=false;
  }
  affiche2(){
    this.clicked2=!this.clicked2;
    this.clicked1=this.clicked3=false;
  }
  affiche3(){
    this.clicked3=!this.clicked3;
    this.clicked1=this.clicked2=false;
  }
  Watchvideo(path:string) {

    window.location.href =path ;

  }
}
