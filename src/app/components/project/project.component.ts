import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubDeciplineService} from '../../services/SubDecipline.service';
import {Project} from '../../models/project';
import {SubDecipline} from '../../models/subDecipline';
import {ProjectService} from '../../services/Project.service';
import { Location } from '@angular/common';
import {Specialite} from '../../models/specialite';
import {SpecialiteService} from '../../services/specialite.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public projectService : ProjectService,
    public subdeciplineService: SubDeciplineService,
    public specialiteService: SpecialiteService,
    private location : Location,
    public router: Router,

    ) { }
  project : Project;
  idproject : number;
  subdecipline : SubDecipline;
  IDsubdecipline : number;
  specialite : Specialite;
  idSpecialite : number;
  categorie : any ;

  ngOnInit(): void {
    this.getProject();
    this.categorie = this.route.snapshot.params.categorie;

  }

  getProject(){
    this.route.params.subscribe(
      (params) => {
        this.idproject = params.idproject,
          this.IDsubdecipline= params.subdecipline,
          this.idSpecialite=params.id


      })
    this.projectService.getbyId(this.idproject).subscribe(
      data=>{
        console.log(data)
        this.project=data
      }

    ),this.subdeciplineService.getbyId(this.IDsubdecipline).subscribe(
      data=>{
        console.log(data)
        this.subdecipline=data}

      ),this.specialiteService.getbyId(this.idSpecialite).subscribe(
      data=>{
        console.log(data)
        this.specialite=data})

    ;

    console.log(this.project);
    console.log(this.subdecipline);

}

GoBack(){
    this.location.back();
}

  GoToRequirements()
  {

    window.location.href="https://student.inodev.tn/";

  }



}
