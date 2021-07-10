import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {TokenService} from '../../services/token.service';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Skills} from '../../models/skills';
import {SkillsService} from '../../services/skills.service';
import {Education} from '../../models/education';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() educat: Skills = null;

  @Output() editSkills = new EventEmitter();
  skillsForm: FormGroup;
  constructor(private account: AccountService,
              private router: Router,
              public sign: SignupServiceService,
              private Token: TokenService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private srv: SkillsService) {
    this.skillsForm = new FormGroup({
      certifier: new FormControl(null, [Validators.required]),
      niveau: new FormControl(null, Validators.required),
      nom: new FormControl(null, Validators.required)
    });
  }

  form = false;
  statut = false;
  educt: Skills;
  educ: Skills = {
    nom: '',
    niveau: '',
    certifier: false,
    skillsId: ''
  };
  edu: any;
  tok: string;
  id: string;
  ide: string;
  email: string;
  show1: Skills;

  educations: Skills[];
  educationss: any;
  ngOnInit(): void {
    this.id = this.Token.getInfos().id;
    this.tok = this.Token.getToken();
    this.all();
  }
  all(){
    this.srv.getAll()
      .subscribe((res: Skills[]) => this.educations = res);
  }
  logout() {
    this.Token.remove();
    this.account.changeAuthStatus(false);
    this.toastr.info(
      `Déconnexion`,
      'Vous êtes déconnecter !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }
    );
    this.router.navigateByUrl('/login');
  }
  edit(ided: string,  education: Skills) {
    this.srv.updateSkills(ided, education)
      .subscribe(res => {console.log(res);  });
    this.statut = false;
    this.toastr.warning('Data Update successfully !!', 'UPDATE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  persistSkills(data: Skills) {
    this.srv.Save(data)
      .subscribe((res: Skills) => this.educations = [res, ...this.educations]);
    this.form = false;
    this.toastr.success('Data Store successfully !!', 'STORE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }

  editeducation(education: Skills) {
    this.statut = true;
    this.educt = education;
  }
  delete(idedu: string) {
    if (window.confirm('Are sure you want to delete this Article ?')) {
      this.srv.delete(idedu)
        .subscribe(res => {
          console.log(res);
          this.all();
        });
      this.statut = false;
      this.toastr.error('Data delete successfully !!', 'DELETE', {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      });
    }
  }
  createSkills() {

    this.persistSkills(this.skillsForm.value);
    this.skillsForm.reset();
  }
  openform(){
    this.form = true;
  }
  fermeform(){
    this.form = false;
  }

}
