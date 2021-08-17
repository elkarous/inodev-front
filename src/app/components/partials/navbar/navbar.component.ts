import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../../services/token.service';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import {Condidat} from '../../../models/condidat';
import {SignupServiceService} from '../../../services/signup-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
logo: any = '../assets/Logo.png';
  public loggedIn = false;
  public userInfos: any = null;
  public id: any;
  public con: Condidat;

  constructor(
    private account: AccountService,
    private router: Router,
    private Token: TokenService,
    public sign: SignupServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.account.authStatus.subscribe(value => {
      this.loggedIn = value;
      this.id = this.Token.getId();
      console.log(this.id)
      this.userInfos = this.Token.getInfos();
      this.sign.get(this.id).subscribe((res: Condidat) => { console.log(res);
                                                            this.con = res;
      });
    });
  }

  logout() {
    this.Token.remove();
    this.account.changeAuthStatus(false);
    this.toastr.info(
        `Déconnexion`,
        'Vous êtes déconnecter !',
        {
          timeOut: 3000,
          positionClass: 'toast-bottom-left'
        }
    );
    this.router.navigateByUrl('/plan/login');
  }
}
