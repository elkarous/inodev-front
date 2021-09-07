import { Component, OnInit } from '@angular/core';
import {OffreService} from '../services/offre.service';
import {Project} from '../models/project';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
projects:Project[];
project:Project;
term:string;
photo:File;
message:File;

  constructor( private offerservice:OffreService) { }

  ngOnInit(): void {
    this.getAllProject();
this.project=new Project();
  }
  getAllProject(){
    this.offerservice.getAllProject().subscribe(
      data=>{
        this.projects=data;
        console.log(this.projects)
      }
    )
  }
  delete(id:number){
    this.offerservice.DeleteProject(id).subscribe();
  }
  Add(){
    this.offerservice.AddProject(this.project).subscribe();
  }
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0];
      this.message = this.photo;
      console.log(this.message);
    }
  }
}
