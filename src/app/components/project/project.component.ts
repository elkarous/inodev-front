import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {OffreService} from '../../services/offre.service';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  candidate: any;
  con: any ;
  public id: any;
  public type: any;
  public summer: Date;
  public year: Date;
  public taw: string;
  public semester: Date;
  public etat = false;
  public pos: any;
  constructor(
    private account: AccountService,
    private router: Router,
    public sign: SignupServiceService,
    public co: OffreService,
    private Token: TokenService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.year = new Date();
    this.taw = new Date().toISOString();
    this.summer = new Date();
    this.semester = new Date();
    this.semester.setDate(this.semester.getDate() + 180);
    this.year.setDate(this.year.getDate() + 365);
    this.summer.setDate(this.summer.getDate() + 90);
    this.id = this.Token.getInfos().id;
    this.sign.get(this.id).subscribe((res: any) => { console.log(res);
                                                     this.con = res;
    });
    this.co.getbynom().subscribe(res => {this.pos = res; console.log(this.pos); });
  }

}
