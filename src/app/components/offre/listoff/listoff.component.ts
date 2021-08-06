import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../../services/signup-service.service';
import {OffreService} from '../../../services/offre.service';
import {TokenService} from '../../../services/token.service';
import {Education} from '../../../models/education';
import {ToastrService} from 'ngx-toastr';
import {DatePipe, Location} from '@angular/common';
import {Condidat} from '../../../models/condidat';
import {Offre} from '../../../models/offre';
import {Specialite} from '../../../models/specialite';
import {FormControl} from '@angular/forms';
import { map, take } from 'rxjs/operators';
import {SpecialiteComponent} from '../../specialite/specialite.component';
import {Skills} from '../../../models/skills';

@Component({
  selector: 'app-listoff',
  templateUrl: './listoff.component.html',
  styleUrls: ['./listoff.component.css']
})
export class ListoffComponent implements OnInit {
  public offre1: any;
  private a: any;
  myControle = new FormControl();
  dataarray = [];
  dataarra = [];
  public add = false;
  myDate: string ;
  con = new Offre();
  spe = new Specialite();
  skill = new Skills();

  photo: File;
  photo1: File;
  message: File ;
  message1: File ;
  term: string;
  condidat: Condidat;
  private id: any;
  p: any;
  constructor(
    private account: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    public sign: SignupServiceService,
    public off: OffreService,
    private location: Location,
    private toastr: ToastrService,
    private Token: TokenService) {
  }

  ngOnInit(): void {
    this.p = 0;
    this.allOffre();
    this.id = this.Token.getInfos().id;
    this.sign.get(this.id).subscribe((res: any) => { console.log(res);
                                                     this.condidat = res;
    });
    this.myDate = new Date().toISOString();
    console.log(this.myDate);
    this.spe = new Specialite();
    this.dataarray.push(this.spe);
    this.skill = new Skills();
    this.dataarra.push(this.skill);
  }
  Add(){
    const formData = new FormData();
    if (this.photo){
      this.con.image = this.photo.name; }
    this.con.project= this.dataarray;
    this.con.skills = this.dataarra;
    formData.append('file', this.photo);
    formData.append('offre', JSON.stringify(this.con));
    console.log(this.con);
    this.off.save(formData)
      .subscribe(res => {
        console.log(res);
      });
    this.toastr.success('Data Add successfully !!', 'Create', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }

  allOffre() {
    this.off.getOfferbyType(this.route.snapshot.params.id).subscribe(res => {
      console.log(res);
      this.offre1 = res;
    });
  }

  edit(idedu: string) {

  }

  delete(id: string) {
    if (window.confirm('Are sure you want to delete this Offre?')) {
    console.log(id);
    this.off.delete(id)
      .subscribe(res => {this.a = res; this.allOffre(); } );
    this.toastr.error('Data delete successfully !!', 'DELETE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
    this.location.forward();
  }}
  backClicked() {
    this.location.back();
  }
  Clicked() {
    this.add = true ;
  }
  Click() {
    this.add = false ;
  }
  CI() {
    this.off.getOfferbyType('intership').subscribe(res => {
      console.log(res);
      this.offre1 = res;
      this.router.navigateByUrl('/listoff/intership');
    });
  }
  CS() {
    this.off.getOfferbyType('study').subscribe(res => {
      console.log(res);
      this.offre1 = res;
      this.router.navigateByUrl('/listoff/study');
    });
  }
  CV() {
    this.off.getOfferbyType('volunteer').subscribe(res => {
      console.log(res);
      this.offre1 = res;
      this.router.navigateByUrl('/listoff/volunteer');
    });
  }
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0];
      this.message = this.photo;
      console.log(this.message);
    }
  }
  Addform(){
    this.spe = new Specialite();
    this.dataarray.push(this.spe);
  }
  remove(index){
this.dataarray.splice(index);
  }

  Addfor(){
    this.skill = new Skills();
    this.dataarra.push(this.skill);
  }
  remov(index){
    this.dataarra.splice(index);
  }
}
