import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OffreService} from '../../services/offre.service';
import {SpecialiteService} from '../../services/specialite.service';
import {CondidatoffreService} from '../../services/condidatoffre.service';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public spe: any;
  public duree: any;
  public niveau: any;
  public of: any;
  public s: any;
  public p: number;
  constructor(public route: ActivatedRoute,
              public off: OffreService,
              public tok: TokenService,
              public co: CondidatoffreService,
              public spec: SpecialiteService) { }

  ngOnInit(): void {
    this.p = 1;
    this.spe = this.route.snapshot.params.id;
    this.duree = this.route.snapshot.params.id1;
    this.niveau = this.route.snapshot.params.id2;

    this.spec.getAll().subscribe(res => {
     this.of=res
      console.log(this.of)
      this.s = res;
    });
  }
  alloffre(spe: string, duree: string, niveau: string) {
    this.off.getsearch(spe, duree, niveau, this.route.snapshot.params.id3).subscribe(res => {

      this.of = res;
    });
  }
  allspe(id: number) {
    this.spec.getoffreId(id).subscribe(res => {
      console.log(res);
      this.s = res;
    });
  }
}
