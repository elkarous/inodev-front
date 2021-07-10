import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../models/question';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {TokenService} from '../../services/token.service';
import {ToastrService} from 'ngx-toastr';
import {QuestionService} from '../../services/question.service';
import {Experience} from '../../models/experience';
import {Condidat} from '../../models/condidat';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() educat: Question = null;

  @Output() editQuestion = new EventEmitter();
  questionForm: FormGroup;
  constructor(private account: AccountService,
              private router: Router,
              public sign: SignupServiceService,
              private Token: TokenService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private srv: QuestionService) {
    this.questionForm = new FormGroup({
      premier: new FormControl(null, [Validators.required]),
      deuxieme: new FormControl(null, Validators.required),
      troiseme: new FormControl(null, Validators.required)
    });
  }

  form = true;
  statut = false;
  educt: Question;
  educ: Question = {
    questionId: '',
    premier: '',
    deuxieme: '',
    troiseme: ''
  };
  edu: any;
  tok: string;
  id: string;
  ide: string;
  email: string;
  show1: Question;
  con: Condidat = {
    id: 0,
    firstName: '',
    phone: '',
    email: '',
    admin: 0,
    date_birthday: new Date(),
    password: '',
    lastName: '',
    nationality: '',
    gender: '',
    photo: '',
    userId: '',
    enabled: '',
  };
  educations: Question[];
  educationss: any;
  ngOnInit(): void {
    this.id = this.Token.getInfos().id;
    this.tok = this.Token.getToken();
    this.srv.getAll()
      .subscribe((res: Question []) => this.educations = res);
    console.log(this.form);
    this.sign.get(this.id).subscribe((res: Condidat) => { console.log(res);
                                                          this.con = res;
    });
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
  edit(ided: string,  education: Question) {
    this.srv.updateQuestion(ided, education)
      .subscribe(res => {console.log(res);  });
    this.statut = false;
    this.toastr.warning('Data Update successfully !!', 'UPDATE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  persistSkills(data: Question) {
    this.srv.Save(data)
      .subscribe((res: Question) => this.educations = [res, ...this.educations]);
    this.form = false;
    this.toastr.success('Data Store successfully !!', 'STORE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
    this.form = false;
  }

  editExperience(education: Question) {
    this.statut = true;
    this.educt = education;
  }
  delete(idedu: string) {
    this.srv.delete(idedu)
      .subscribe(res => {console.log(res);  this.router.navigate(['/question']); });
    this.statut = false;
    this.toastr.error('Data delete successfully !!', 'DELETE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  createQuestion() {
    this.persistSkills(this.questionForm.value);
    this.questionForm.reset();
  }
  openform(){
    this.form = true;
  }
  fermeform(){
    this.form = false;
  }
}
