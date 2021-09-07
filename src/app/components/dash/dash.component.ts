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

  con: Condidat;
  public id: any;

  constructor(

    public sign: SignupServiceService,
    private Token: TokenService,
) { }

  ngOnInit(): void {

    this.id = this.Token.getInfos().id;
    this.sign.get(this.id).subscribe((res: Condidat) => { console.log(res);
                                                          this.con = res;
    });


  }

}

