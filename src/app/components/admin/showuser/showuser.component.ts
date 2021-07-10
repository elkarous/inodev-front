import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  public document: any;
  public aa: any;
  public skills: any;
  public educations: any;
  public experience: any;
  private email: string;

  constructor(public sign: SignupServiceService,
              private Token: TokenService,
              private edu: EducationService,
              private srv: DocumentService,
              private route: ActivatedRoute,
              private exp: ExperienceService,
              private skill: SkillsService) { }
  con: any ;
  tok: string;
  id: string;
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.email = this.route.snapshot.params.id1;
    this.sign.get(this.id).subscribe((res: Condidat) => { console.log(res);
                                                          this.con = res;
    });
    this.sign.getohoto(this.id).subscribe((res: Condidat) => { console.log(res);
                                                               this.aa = res;   console.log('hna');
    });
    this.alldoc();
    this.alledu();
    this.allexp();
    this.allskills();
  }
  allskills(){
    this.skill.getuser(this.email)
      .subscribe((res: Skills[]) => this.skills = res);
  }
  allexp(){
    this.exp.getuser(this.email)
      .subscribe((res: Experience[]) => this.experience = res);
  }
  alldoc(){
    this.srv.getuser(this.email)
      .subscribe((res: Document[]) => this.document = res);
  }
  alledu(){
    this.edu.getuser(this.email)
      .subscribe((res: Education[]) => this.educations = res);
  }
}
