import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {TokenService} from '../../services/token.service';
import {Condidat} from '../../models/condidat';
import {CondidatoffreService} from '../../services/condidatoffre.service';

@Component({
  selector: 'app-condidature',
  templateUrl: './condidature.component.html',
  styleUrls: ['./condidature.component.css']
})
export class CondidatureComponent implements OnInit {
  candidate: Condidat[];
  con: any;
  public id: any;
  constructor(
    private account: AccountService,
    private router: Router,
    public sign: SignupServiceService,
    private co: CondidatoffreService) { }

  ngOnInit(): void {
    this.co.myapp().subscribe((res: Condidat) => { console.log(res);
                                                   this.con = res;
    });
  }

}
