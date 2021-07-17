import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Document} from '../../models/document';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../services/signup-service.service';
import {TokenService} from '../../services/token.service';
import {ToastrService} from 'ngx-toastr';
import {DocumentService} from '../../services/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  @Input() educat: Document = null;

  @Output() editSkills = new EventEmitter();
  experienceForm: FormGroup;
  public imagePath;
  imgURL: any;
  public message: string;
  private userFile: any;
  public f: any;
  constructor(private account: AccountService,
              private router: Router,
              public sign: SignupServiceService,
              private Token: TokenService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private srv: DocumentService) {
    this.experienceForm = new FormGroup({
      nom: new FormControl(null, )
    });
  }

  form = false;
  statut = false;
  educt: Document;
  educ: Document = {
    documentId: '',
    nom: ''
  };
  edu: any;
  tok: string;
  id: string;
  ide: string;
  email: string;
  show1: Document;

  educations: Document[];
  educationss: any;
  ngOnInit(): void {
    this.id = this.Token.getInfos().id;
    this.tok = this.Token.getToken();
    this.all();
  }
  all(){
    this.srv.getAll()
      .subscribe((res: Document[]) => this.educations = res);
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
  persistSkills(data: File) {
    const formData = new FormData();
    formData.append('file', data);
    this.srv.Save(formData)
      .subscribe((res: Document) => this.educations = [res, ...this.educations]);
    this.form = false;
    this.toastr.success('Data Store successfully !!', 'STORE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }

  editExperience(education: Document) {
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
  createExperience() {

    this.persistSkills(this.f);
    this.experienceForm.reset();
  }
  openform(){
    this.form = !this.form;
  }
  fermeform(){
    this.form = false;
  }
  edit(ided: string) {
    const formData = new FormData();
    formData.append('file', this.f);
    this.srv.updateDocument(ided, formData)
      .subscribe(res => {console.log(res);  });
    this.statut = false;
    this.toastr.warning('Data Update successfully !!', 'UPDATE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.f = event.target.files[0];
      this.message = this.f;
      console.log(this.message);
    }
  }
}
