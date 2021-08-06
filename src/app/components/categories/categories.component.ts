import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OffreService} from '../../services/offre.service';
import {TokenService} from '../../services/token.service';
import {SpecialiteService} from '../../services/specialite.service';
import {Offre} from '../../models/offre';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
   ca: string;
   counter = Array;
  public offre1: Offre[];
  public of: any;
  public kol: any[];
  public a =  false;
  public o: any;
  public p: number;
  public s: any;
  constructor(private Token: TokenService,
              public offreService: OffreService,
              public route: ActivatedRoute,
              private router: Router,
              public specialiteService: SpecialiteService
  ) {}
  ngOnInit(): void {
    this.kol = null;
    this.alloffre(this.route.snapshot.params.id);
  }
  alloffre(o: string) {
    this.p = 1;
    this.offreService.getcat(o, this.route.snapshot.params.id1).subscribe(res => {
        console.log(res);
        this.of = res;
      });
    this.specialiteService.getAll().subscribe(res => {
      console.log(res);
      this.s = res;
    });
  }
}
