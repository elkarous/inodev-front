import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Condidat } from '../models/condidat';
import { AccountService } from '../services/account.service';
import { SignupServiceService } from '../services/signup-service.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-bigprofile',
  templateUrl: './bigprofile.component.html',
  styleUrls: ['./bigprofile.component.css']
})
export class BigprofileComponent implements OnInit {

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
  con: Condidat = {
    id: 0,
    firstName: '',
    phone: '',
    email: '',
    admin: 0,
    date_birthday: new Date(),
    password: '',
    lastName: '',
    nationality: '',
    gender: '',
    photo: '',
    enabled: '',
    userId: '',
  };
  candidate: any ;
  tok: string;
  id: string;
  ngOnInit(): void {
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
    const formData = new FormData();
    if (this.photo){
    this.con.photo = this.photo.name; }
    formData.append('photo', this.photo);
    console.log(this.con);
    formData.append('condidat', JSON.stringify(this.con));
    this.sign.updateC(this.id, formData)
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
