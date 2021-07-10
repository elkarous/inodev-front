import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../../services/signup-service.service';
import {TokenService} from '../../../services/token.service';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Condidat} from '../../../models/condidat';
import {Location} from '@angular/common';

@Component({
  selector: 'app-list-condidat',
  templateUrl: './list-condidat.component.html',
  styleUrls: ['./list-condidat.component.css']
})
export class ListCondidatComponent implements OnInit {
  public id: any;
  term: string;
  public addc = false;
  public adds = false;
  public addco = false;
  constructor(
    private account: AccountService,
    private router: Router,
    public sign: SignupServiceService,
    private Token: TokenService,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient) {
  }

  candidate: any;
  con: any ;
  ngOnInit(): void {
    this.id = this.Token.getInfos().id;
    this.cond();
    this.sign.get(this.id).subscribe((res: Condidat) => { console.log(res);
                                                          this.con = res;
    });
  }

  cond() {

    this.sign.getAll().subscribe(res => {
      console.log(res);
      this.candidate = res;
    });
  }
  backClicked() {
    this.location.back();
  }
  Clicked() {
    this.addc = true ;
  }
  Click() {
    this.addc = false ;
  }
  Clickeds() {
    this.adds = true ;
  }
  Clicks() {
    this.adds = false ;
  }
  Clickedc() {
    this.addco = true ;
  }
  Clickc() {
    this.addco = false ;
  }
  delete(id: string) {
    if (window.confirm('Are sure you want to delete this Article ?')) {
    this.sign.delete(id).subscribe((res: Condidat) => { console.log(res);
                                                        this.cond();
    });  }
}}
