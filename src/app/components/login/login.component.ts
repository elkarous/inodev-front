import { AccountService } from './../../services/account.service';
import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {SocialAuthService, SocialUser} from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 ju: any;
  user: SocialUser;
  loggedIn: boolean;
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authServiceS: SocialAuthService,
      private authService: AuthService,
      private token: TokenService,
      private account: AccountService,
      private router: Router,
      private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.authServiceS.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    this.authServiceS.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authServiceS.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authServiceS.signOut();
  }
  signIn() {
    this.authService.login(this.loginForm.value)
        .subscribe(
          res => this.handleResponse(res),
          err => this.toastr.error(
              `Erreur`,
              'Merci de Vérifier votre email ou mot de passe !',
              {
                timeOut: 3000,
                positionClass: 'toast-bottom-left'
              }
          )); }

  handleResponse(data) {
    this.token.handle(data);


    this.account.changeAuthStatus(true);
    this.toastr.success(
      `Bienvenu `,
      'Vous êtes connectés !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }
    );
    this.ju = this.token.getInfos().id;

    this.router.navigateByUrl('/dashboard');
    window.location.reload();
  }
  facebookLogin(){
    this.authService.facebookLogin().subscribe();
}
  refreshToken(): void {
    this.authServiceS.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
