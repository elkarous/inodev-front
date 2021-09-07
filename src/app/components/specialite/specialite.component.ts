import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {OffreService} from '../../services/offre.service';
import {ToastrService} from 'ngx-toastr';
import {TokenService} from '../../services/token.service';
import {SpecialiteService} from '../../services/specialite.service';
import {Location} from '@angular/common';
import {Offre} from '../../models/offre';
import {Specialite} from '../../models/specialite';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {
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
  categorie : any;
  ngOnInit(): void {
    this.p = 1;
    this.id = this.Token.getInfos().id;
    this.tok = this.Token.getToken();
    this.categorie = this.route.snapshot.params.id;

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

}
