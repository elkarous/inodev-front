import { Component, OnInit } from '@angular/core';
import {SubDecipline} from '../../models/subDecipline';
import {ActivatedRoute} from '@angular/router';
import {SpecialiteService} from '../../services/specialite.service';
import {Specialite} from '../../models/specialite';

@Component({
  selector: 'app-subdecipline',
  templateUrl: './subdecipline.component.html',
  styleUrls: ['./subdecipline.component.css']
})
export class SubdeciplineComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public specialiteService : SpecialiteService,
  ) { }
  specialite : Specialite;
  subdeciplines: SubDecipline[];
  id : number;
  p:number;
  categorie : any;


  ngOnInit(): void {

    this.getSpecialite();
    this.categorie = this.route.snapshot.params.categorie;

    this.p = 1;
  }

  getSpecialite() {

    this.route.params.subscribe(
      (params) => {
        this.id = params.id;

      })
  this.specialiteService.getbyId(this.id).subscribe(
    data=>{
      console.log(data)
      this.specialite=data
    }
  );

    console.log(this.specialite);

}



}
