import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Source} from '../../models/source';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {TokenService} from '../../services/token.service';
import {ToastrService} from 'ngx-toastr';
import {SourceService} from '../../services/source.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  @Input() educat: Source = null;

  @Output() editQuestion = new EventEmitter();
  questionForm: FormGroup;
  constructor(private account: AccountService,
              private router: Router,
              public sign: SignupServiceService,
              private Token: TokenService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private srv: SourceService) {
    this.questionForm = new FormGroup({
      describ: new FormControl(null, [Validators.required]),
      position: new FormControl(null, Validators.required)
    });
  }

  form = true;
  statut = false
  educt: Source;
  edu: any;
  tok: string;
  id: string;
  ide: string;
  email: string;
  show1: Source;

  educations: Source[];
  educationss: any;
  ngOnInit(): void {
    this.id = this.Token.getInfos().id;
    this.tok = this.Token.getToken();
    this.srv.getAll()
      .subscribe((res: Source []) => this.educations = res);
    console.log(this.form);
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
  edit(ided: string,  education: Source) {
    this.srv.updateSource(ided, education)
      .subscribe(res => {console.log(res);  });
    this.statut = false;
    this.toastr.warning('Data Update successfully !!', 'UPDATE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  persistSkills(data: Source) {
    this.srv.Save(data)
      .subscribe((res: Source) => this.educations = [res, ...this.educations]);
    this.form = false;
    this.toastr.success('Data Store successfully !!', 'STORE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
    this.form = false;
  }

  editExperience(education: Source) {
    this.statut = true;
    this.educt = education;
  }
  delete(idedu: string) {
    this.srv.delete(idedu)
      .subscribe(res => {console.log(res);  this.router.navigate(['/source']); });
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
