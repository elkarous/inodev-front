import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {OffreService} from '../../services/offre.service';
import {ToastrService} from 'ngx-toastr';
import {TokenService} from '../../services/token.service';
import {SpecialiteService} from '../../services/specialite.service';
import {Location} from '@angular/common';
import {Offre} from '../../models/offre';
import {Specialite} from '../../models/specialite';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {
  public offre1: any;
  public offre: any;
  public offf: any;
  myControl = new FormControl();
  myControle = new FormControl();
  private a: any;
  public add = false;
  myDate: string ;
  term: string;
  con: Specialite;
  photo: File;
  message: File ;
  constructor(private account: AccountService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              public sign: SignupServiceService,
              public off: SpecialiteService,
              public offref: OffreService,
              private toastr: ToastrService,
              private Token: TokenService) { }
  filteredOptions: Observable<string[]>;
  ngOnInit(): void {
    this.allOffre();
    this.allOffrereel();
    this.offref.getbynom().subscribe(res => {
      console.log(res);
      this.offf = res;

    });
  }
  allOffrereel() {
    this.offref.getbynom().subscribe(res => {
      console.log(res);
      this.offre = res;
    });
  }

  Add(){
    const formData = new FormData();
    if (this.photo){
      this.con.image = this.photo.name; }
    formData.append('file', this.photo);
    console.log(this.con);
    formData.append('spe', JSON.stringify(this.con));
    this.off.save(formData)
      .subscribe(res => {
        console.log(res);
      });
    window.location.reload();
    this.toastr.warning('Data Add successfully !!', 'Create', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  allOffre() {

    this.off.getAll().subscribe(res => {
      console.log(res);
      this.offre1 = res;

    });
  }

  delete(id: string) {
    if (window.confirm('Are sure you want to delete this Article ?')) {
    console.log(id);
    this.off.delete(id)
      .subscribe(res => {this.a = res; this.allOffre(); });
    window.location.reload();
    this.toastr.error('Data delete successfully !!', 'DELETE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
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
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0];
      this.message = this.photo;
      console.log(this.message);
    }
  }
}
