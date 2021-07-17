import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Experience} from '../../models/experience';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {TokenService} from '../../services/token.service';
import {ToastrService} from 'ngx-toastr';
import {ExperienceService} from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() educat: Experience = null;

  @Output() editSkills = new EventEmitter();
  experienceForm: FormGroup;
  constructor(private account: AccountService,
              private router: Router,
              public sign: SignupServiceService,
              private Token: TokenService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private srv: ExperienceService) {
    this.experienceForm = new FormGroup({
      job_title: new FormControl(null, [Validators.required]),
      organization: new FormControl(null, Validators.required),
      dateDebut: new FormControl(null, Validators.required),
      dateFin: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      pays: new FormControl(null, Validators.required)
    });
  }

  form = false;
  statut = false;
  educt: Experience;
  educ: Experience = {
    experienceId: '',
    job_title: '',
    organization: '',
    pays: '',
    dateDebut: new Date(),
    dateFin: new Date(),
    type: ''
  };
  edu: any;
  tok: string;
  id: string;
  ide: string;
  email: string;
  show1: Experience;

  educations: Experience[];
  educationss: any;
  ngOnInit(): void {
    this.id = this.Token.getInfos().id;
    this.tok = this.Token.getToken();
    this.all();
  }
  all(){
    this.srv.getAll()
      .subscribe((res: Experience[]) => this.educations = res);
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
  edit(ided: string,  education: Experience) {
    this.srv.updateExperience(ided, education)
      .subscribe(res => {console.log(res);  });
    this.statut = false;
    this.toastr.warning('Data Update successfully !!', 'UPDATE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  persistSkills(data: Experience) {
    this.srv.Save(data)
      .subscribe((res: Experience) => this.educations = [res, ...this.educations]);
    this.form = false;
    this.toastr.success('Data Store successfully !!', 'STORE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }

  editExperience(education: Experience) {
    this.statut = !this.statut;
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
  createExperience() {

    this.persistSkills(this.experienceForm.value);
    this.experienceForm.reset();
  }
  openform(){
    this.form = !this.form;
  }
  fermeform(){
    this.form = false;
  }

}
