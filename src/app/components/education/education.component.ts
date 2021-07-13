import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {TokenService} from '../../services/token.service';
import {ToastrService} from 'ngx-toastr';
import {EducationService} from '../../services/education.service';
import {Education} from '../../models/education';
import {Address} from '../../models/address';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() educat: Education = null;

  @Output() editEducation = new EventEmitter();
  educationForm: FormGroup;

  constructor(
    private account: AccountService,
    private router: Router,
    public sign: SignupServiceService,
    private Token: TokenService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private srv: EducationService
  ) {
  this.educationForm = new FormGroup({
    nomFaculte: new FormControl(null, Validators.required),
    dateDebut: new FormControl(null, Validators.required),
    dateFin: new FormControl(null, Validators.required),
    specialite: new FormControl(null, Validators.required),
    niveau: new FormControl(null, Validators.required),
    pays: new FormControl(null, Validators.required)
  });

}

form = false;
  statut = false;
  educt: Education;
  educ: Education = {
    nomFaculte: '',
    dateDebut: new Date(),
    dateFin: new Date(),
    nomDiplome: '',
    specialite: '',
    niveau: '',
    pays: '',
    educationId: ''
  };
  edu: any;
  tok: string;
  id: string;
  ide: string;
  email: string;
  show1: Education;

  educations: Education[];
  educationss: any;
  ngOnInit(): void {
    this.id = this.Token.getInfos().id;
    this.tok = this.Token.getToken();
    this.all();
  }
  all(){
    this.srv.getAll()
      .subscribe((res: Education[]) => this.educations = res);
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
  edit(ided: string,  education: Education) {
    this.srv.updateEducation(ided, education)
      .subscribe(res => {console.log(res); });
    this.statut = false;
    this.toastr.warning('Data Update successfully !!', 'UPDATE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }


  editeducation(education: Education) {
    this.statut = !this.statut;
    this.educt = education;
  }
  delete(idedu: string) {
    if (window.confirm('Are sure you want to delete this Article ?')) {

      this.srv.delete(idedu)
        .subscribe(res => {
          this.educationss = res;
          this.all();
        });
      this.statut = false;
      this.toastr.error('Data delete successfully !!', 'DELETE', {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      });
      this.srv.getAll()
        .subscribe((res: Education[]) => this.educations = res);
    }
  }
  persistEducation(data: Education) {
    this.srv.Save(data)
      .subscribe((res: Education) => this.educations = [res, ...this.educations]);
    this.form = false;
    this.toastr.success('Data Store successfully !!', 'STORE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  createEducation() {

    this.persistEducation(this.educationForm.value);
    this.educationForm.reset();
  }
  openform(){
    this.form = !this.form;
  }
  fermeform(){
    this.form = false;
  }
}
