import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenService} from '../../services/token.service';
import {ToastrService} from 'ngx-toastr';
import {SignupServiceService} from '../../services/signup-service.service';
import {OffreService} from '../../services/offre.service';
import {DomSanitizer} from '@angular/platform-browser';
import {SpecialiteService} from '../../services/specialite.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public offre1: any;
  public aa: any;
  public a: any;
  constructor(
    private account: AccountService,
    private router: Router,
    public sign: SignupServiceService,
    public off: OffreService,
    private Token: TokenService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
  ) {}
  candidate: any ;
tok: string;
  id: string;
  thumbnail: any;
  ngOnInit(): void {
    this.id = this.Token.getInfos().id;
    this.tok = this.Token.getToken();
    this.cond(this.id);
    this.allOffre();
  }
cond(id: string) {

  this.sign.get(id).subscribe(res => {
    console.log(res);
    this.candidate = res;
    });
}
  allOffre() {

    this.off.getAll().subscribe(res => {
      console.log(res);
      this.offre1 = res;

    });
  }

  getimg(ide: string){
    this.off.getohoto(ide).subscribe((res: any) => { console.log(res);
                                                     this.aa = res;
    });
  }
 }
