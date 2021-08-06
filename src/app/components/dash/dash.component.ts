import { Component, OnInit } from '@angular/core';
import {DatePipe, Location} from '@angular/common';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {TokenService} from '../../services/token.service';
import {Condidat} from '../../models/condidat';
import {OffreService} from '../../services/offre.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  candidate: Condidat[];
  con: Condidat;
  public id: any;
  public pos: any;
  public summer: any;
  public year: any;
  public taw: any;
  public semester: any;
  constructor(
    private account: AccountService,
    private router: Router,
    public sign: SignupServiceService,
    private Token: TokenService,
    public co: OffreService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.year = new Date();
    this.taw = new Date();
    this.summer = new Date();
    this.semester = new Date();
    this.semester.setDate(this.semester.getDate() + 180);
    this.year.setDate(this.year.getDate() + 365);
    this.summer.setDate(this.summer.getDate() + 90);
    this.id = this.Token.getInfos().id;
    this.sign.get(this.id).subscribe((res: Condidat) => { console.log(res);
                                                          this.con = res;
    });
    this.co.getbynom().subscribe(res => {this.pos = res; console.log(this.pos); });
    this.sign.getAll().subscribe(res => {
      console.log(res);
      this.candidate = res;
    });
  }
  backClicked() {
    this.location.back();
  }
  days_between(StartDate, EndDate) {

    // The number of milliseconds in one day
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const start = Date.UTC(EndDate.getFullYear(), EndDate.getMonth(), EndDate.getDate());
    const end = Date.UTC(StartDate.getFullYear(), StartDate.getMonth(), StartDate.getDate());

    // so it's safe to divide by 24 hours
    return (start - end) / oneDay;

  }
}

