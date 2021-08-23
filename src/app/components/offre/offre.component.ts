import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {OffreService} from '../../services/offre.service';
import {TokenService} from '../../services/token.service';
import {ToastrService} from 'ngx-toastr';
import {DomSanitizer} from '@angular/platform-browser';
import {SpecialiteService} from '../../services/specialite.service';
import {Specialite} from '../../models/specialite';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../models/question';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  specialites: Specialite[];
  public aa: any;
  public a: any;
  public p: number;
  searchForm: FormGroup;
  constructor(
    private account: AccountService,
    private router: Router,
    public sign: SignupServiceService,
    public spe: SpecialiteService,
    private Token: TokenService,
    public route: ActivatedRoute,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
  ) {
    this.searchForm = new FormGroup({
      niveau: new FormControl(null),
      cat: new FormControl(null),
      duree: new FormControl(null)
    });
  }
  search: any = {
    niveau: 'null',
    cat: 'null',
    duree: 'null'
  };
  candidate: any ;
  tok: string;
  ty: string;
  id: string;
  ngOnInit(): void {
    this.p = 1;
    this.id = this.Token.getInfos().id;
    this.tok = this.Token.getToken();
    this.ty = this.route.snapshot.params.id;
    this.cond(this.id);
    this.allOffre();
    this.specialites;
  }
  cond(id: string) {

    this.sign.get(id).subscribe(res => {
      console.log(res);
      this.candidate = res;
    });
  }
  allOffre() {
    this.spe.getAll().subscribe((res: Specialite[]) => {
      console.log(res);
      this.specialites = res;
    });
  }

  getimg(ide: string){
    this.spe.getohoto(ide).subscribe((res: any) => { console.log(res);
                                                     this.aa = res;
    });
  }
  public cat(ca: string){
    this.Token.setC(ca);
  }
  filter() {
    if (this.route.snapshot.params.id === 'intership') {
      this.router.navigateByUrl('/search/' + this.search.cat + '/' + this.search.duree + '/' + this.search.niveau + '/' + this.route.snapshot.params.id);
    }
    else if (this.route.snapshot.params.id === 'study'){
      this.router.navigateByUrl('/search/' + this.search.cat + '/' + this.search.duree + '/' + this.search.niveau + '/' + this.route.snapshot.params.id);
    }
    else {
      this.router.navigateByUrl('/search/' + this.search.cat + '/' + this.search.duree + '/' + this.search.niveau + '/' + this.route.snapshot.params.id);
    }
  }
}
