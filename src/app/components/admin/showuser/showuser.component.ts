import {Component, OnInit} from '@angular/core';
import {Document} from '../../../models/document';
import {DocumentService} from '../../../services/document.service';
import {Condidat} from '../../../models/condidat';
import {SignupServiceService} from '../../../services/signup-service.service';
import {TokenService} from '../../../services/token.service';
import {Education} from '../../../models/education';
import {EducationService} from '../../../services/education.service';
import {ExperienceService} from '../../../services/experience.service';
import {Experience} from '../../../models/experience';
import {SkillsService} from '../../../services/skills.service';
import {Skills} from '../../../models/skills';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CondidatOffre} from '../../../models/CondidatOffre';


@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {

applications:CondidatOffre[]
  public aa: any;
   skills: Skills[];

  constructor(public sign: SignupServiceService,
              private Token: TokenService,
              private educationService: EducationService,
              private documentService: DocumentService,
              private route: ActivatedRoute,
             private http:HttpClient
         ) {
  }

  con: Condidat;
  tok: string;
  id: string;

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.sign.get(this.id).subscribe((res: Condidat) => {
      this.con = res;

    });

    this.sign.getohoto(this.id).subscribe((res: Condidat) => {
      this.aa = res;

    });

  }

dowload(document:Document) {
    console.log(document)
  this.documentService.dowload(document.nom).subscribe()
}



getAllApplication(){
  this.sign.getAllApplication(this.con.id).subscribe(data=>{
    this.applications=data
    console.log(data)})

}


}
