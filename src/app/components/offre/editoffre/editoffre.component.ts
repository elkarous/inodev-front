import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OffreService} from '../../../services/offre.service';
import {Offre} from '../../../models/offre';
import {Observable} from 'rxjs';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import {Skills} from '../../../models/skills';
@Component({
  selector: 'app-editoffre',
  templateUrl: './editoffre.component.html',
  styleUrls: ['./editoffre.component.css']
})
export class EditoffreComponent implements OnInit {
  public offer: Offre;
  private id: number;
  public o: any;
  dataarray = [];
  dataarra = [];
  faCamera=faCameraRetro;
  message: File;
  photo: File;
  fileInfos: Observable<any>;
  public imageFile;
  imgUrl: any;
  public aa: any;
  private skill: Skills;
  constructor(public route: ActivatedRoute, public off: OffreService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.off.get(this.id).subscribe(res => {
      this.offer = res;

  });
  }
  edit(id: number){
    this.off.update(id, this.offer).subscribe(rs => {
      console.log(rs);
      this.o = rs;
    });
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0];
      this.message = this.photo;
      this.edit(this.id);
      console.log(this.message);
    }
  }
  remove(index){
    this.dataarray.splice(index);
  }

  Addfor(){
    this.skill = new Skills();
    this.dataarra.push(this.skill);
  }
  remov(index){
    this.dataarra.splice(index);
  }
}
