import { Component, OnInit } from '@angular/core';
import {OffreService} from '../../../services/offre.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SpecialiteService} from '../../../services/specialite.service';
import {TokenService} from '../../../services/token.service';
import {CondidatoffreService} from '../../../services/condidatoffre.service';
import {ToastrService} from 'ngx-toastr';
import {Document} from '../../../models/document';
import {DocumentService} from '../../../services/document.service';
import {Skills} from '../../../models/skills';
import {SkillsService} from '../../../services/skills.service';

@Component({
  selector: 'app-showoffre',
  templateUrl: './showoffre.component.html',
  styleUrls: ['./showoffre.component.css']
})
export class ShowoffreComponent implements OnInit {
  public offre1: any;
  public s: any;
  public exist: number;
  public ds = 0;
  public d = 1;
  public az: string;
  public id: number;
  public skills: any;

  constructor(public route: ActivatedRoute,
              public router: Router,
              public spec: SpecialiteService,
              public tok: TokenService,
              private toastr: ToastrService,
              public co: CondidatoffreService,
              public off: OffreService,
              public srve: SkillsService,
              private srv: DocumentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.off.getid(this.id, this.route.snapshot.params.id1).subscribe(res => {
      this.offre1 = res;
      this.az = this.offre1[0][13];
      console.log(this.offre1);
    });
    this.spec.getAll().subscribe(res => {
      this.s = res;
    });
    this.co.exist(this.id).subscribe((aa: number) => {
      console.log(aa);
      this.exist = aa;
    });
  }
  all(){
    this.srve.skillsoffre(this.id)
      .subscribe((res: Skills[]) => this.skills = res);
  }
  apply()
  {
    window.location.reload();
    this.co.Save(this.id, 1).subscribe(a => {
      console.log(a);
    });
    this.toastr.success('Apply Successfully !!', 'DELETE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  annuler() {
    if (window.confirm('Are sure you want to Annuler Apply ?')) {
      window.location.reload();
      this.co.delete(this.id).subscribe(a => {
        console.log(a);
        this.ngOnInit();
      });
      this.toastr.error('Apply Annuled !!', 'DELETE', {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      });
    }
  }
}
