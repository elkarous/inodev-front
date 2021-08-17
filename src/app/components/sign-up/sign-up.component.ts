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

  condidat: Condidat ;

  constructor( public sign: SignupServiceService,
               private authService: AuthService,
               private token: TokenService,
               private account: AccountService,
               private router: Router,
               private toastr: ToastrService)
  {}

  ngOnInit() {
    this.condidat =new Condidat();
     this.condidat.role=1;
  }
  create(){
      this.sign.Save(this.condidat).subscribe();
      console.log(this.condidat);
      this.router.navigateByUrl('/dashboard');
    }

  }

