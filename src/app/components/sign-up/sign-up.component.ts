import { Component, OnInit } from '@angular/core';
import {SignupServiceService} from '../../services/signup-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Condidat} from '../../models/condidat';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {TokenService} from '../../services/token.service';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
condidas: Observable<object>;
  condidat: Condidat;
  ju: any;
  private id: string;
  public con: any;
  constructor( public sign: SignupServiceService,
               private authService: AuthService,
               private token: TokenService,
               private account: AccountService,
               private router: Router,
               private toastr: ToastrService)
  {}

  ngOnInit() {
    this.id = this.token.getInfos().id;
    this.sign.get(this.id).subscribe((res: Condidat) => { console.log(res);
                                                          this.con = res;
    });
  }
  create(){
      this.sign.Save(this.condidat)
        .subscribe();
      this.router.navigateByUrl('/dashboard');
    }
  create1(){
    this.sign.Save(this.condidat)
      .subscribe();
    this.router.navigateByUrl('/listc');
  }
  }

