import {Component, Inject, OnInit} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {TokenService} from '../../services/token.service';
import {ToastrService} from 'ngx-toastr';
import { Condidat } from 'src/app/models/condidat';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  message: File ;
photo: File;
  fileInfos: Observable<any>;
  public imageFile;
   imgUrl: any ;
  public aa: any;
  constructor(
    private account: AccountService,
    private router: Router,
    public sign: SignupServiceService,
    private Token: TokenService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }
  con:Condidat;
  candidate: any ;
  tok: string;
  id: string;
  ngOnInit(): void {
    this.con = new Condidat();
    this.id = this.Token.getInfos().id;
    this.tok = this.Token.getToken();
    this.sign.get(this.id).subscribe((res: Condidat) => { console.log(res);
                                                          this.con = res;
      });
    console.log('hna');
    this.sign.getohoto(this.id).subscribe((res: Condidat) => { console.log(res);
                                                               this.aa = res;   console.log('hna');
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
    this.router.navigateByUrl('/login');
  }

  updateCond() {
    this.con.userId = this.id;

    this.sign.update(this.id, this.con)
      .subscribe(res => {
        console.log(res);
      });
    this.toastr.warning('Data update successfully !!', 'UPDATE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });

  }
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0];
      this.message = this.photo;

      console.log(this.message);
    }
  }
}
