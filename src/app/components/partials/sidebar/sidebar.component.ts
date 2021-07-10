import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../../services/signup-service.service';
import {TokenService} from '../../../services/token.service';
import {Location} from '@angular/common';
import {Condidat} from '../../../models/condidat';
import {CondidatoffreService} from '../../../services/condidatoffre.service';
import {OffreService} from '../../../services/offre.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  candidate: any;
  con: any ;
  public id: any;
  public etat = false;
  public pos: any;
  constructor(
    private account: AccountService,
    private router: Router,
    public sign: SignupServiceService,
    public co: OffreService,
    private Token: TokenService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.Token.getInfos().id;
    this.sign.get(this.id).subscribe((res: any) => { console.log(res);
                                                     this.con = res;
    });
    this.co.getbynom().subscribe(res => {this.pos = res; console.log(this.pos); });
  }
  backClicked() {
    this.location.back();
  }
}
