import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenService} from '../../services/token.service';
import {SignupServiceService} from '../../services/signup-service.service';
import {OffreService} from '../../services/offre.service';
import {Document} from '../../models/document';
import {DocumentService} from '../../services/document.service';
import {ToastrService} from 'ngx-toastr';
import {Education} from '../../models/education';
import {EducationService} from '../../services/education.service';
import {CondidatoffreService} from '../../services/condidatoffre.service';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  step: any = 1;
  submitted: any = false;
  multistep = new FormGroup({
    userDetails: new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('')
    }),
    contactDetails: new FormGroup({
      email: new FormControl('', Validators.required),
      address: new FormControl(''),
      contactNumber: new FormControl(''),
    }),
    personalDetails: new FormGroup({
      gender: new FormControl('null'),
      education: new FormControl('')
    })
  });
  private id: any;
  public con: any;
  public offre1: any;
  public document: any;
  public f: any;
  public message: any;
  public educationss: any;
  public educations: any;
  public education: any;
  educationForm: FormGroup;
  educationeForm: FormGroup;
  experienceForm: FormGroup;
  form = false;
  statut = false;
  educt: Document;
  forme = false;
  statute = false;
  educte: Education;
  private photo = null;
  public idcon: any;
  public exist: number;
  constructor(private route: Router, private Token: TokenService,
              public sign: SignupServiceService,
              private router: ActivatedRoute,
              public off: OffreService,
              private toastr: ToastrService,
              private srve: EducationService,
              public co: CondidatoffreService,
              public srv: DocumentService) {
    this.educationForm = new FormGroup({
      nomFaculte: new FormControl(null, Validators.required),
      dateDebut: new FormControl(null, Validators.required),
      dateFin: new FormControl(null, Validators.required),
      specialite: new FormControl(null, Validators.required),
      niveau: new FormControl(null, Validators.required),
      pays: new FormControl(null, Validators.required)
    });
    this.experienceForm = new FormGroup({
      nom: new FormControl(null, )
    });
  }

  ngOnInit(): void {
    this.idcon = this.Token.getInfos().id;
    this.sign.get(this.idcon).subscribe((res: any) => { console.log(res);
                                                        this.con = res;
    });
    this.id = this.router.snapshot.params.id;
    this.off.getid(this.id, this.router.snapshot.params.id1).subscribe(res => {
      this.offre1 = res;
    });
    this.co.exist(this.id).subscribe((aa: number) => {
      console.log('hnaaaaaaaaaaaaaaaaaaaa' + aa);
      this.exist = aa;
    });
    this.all();
    this.alle();
  }
  alle(){
    this.srve.getAll()
      .subscribe((res: Education[]) => this.education = res);
  }
  all(){
    this.srv.getAll()
      .subscribe((res: Document[]) => this.document = res);
  }
  get userDetails() {
    return this.multistep.controls['userDetails']['controls'];
  }

  get contactDetails() {
    return this.multistep.controls['contactDetails']['controls'];
  }
  updateCond() {
    this.con.userId = this.id;
    const formData = new FormData();
    formData.append('condidat', JSON.stringify(this.con));
    this.sign.updateC(this.idcon, formData)
      .subscribe(res => {
        console.log(res);
      });
    this.toastr.success('Data update successfully !!', 'UPDATE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });

  }
  submit() {
    this.step = this.step + 1;
    if (this.step === 4) {
      this.route.navigate(['/thankyou']);
    }
  }

  editdoc(education: Document) {
    this.statut = !this.statut;
    this.educt = education;
  }
  cancel() {
    this.statut = false;
  }
  persistEducation(data: Education) {
    this.srve.Save(data,this.id)
      .subscribe((res: Education) => this.education = [res, ...this.educations]);
    this.all();
    this.toastr.success('Data Store successfully !!', 'STORE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  createEducation() {

    this.persistEducation(this.educationForm.value);
  }
  previous() {
    this.step = this.step - 1;
  }
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.f = event.target.files[0];
      this.message = this.f;
      console.log(this.message);
    }
  }
  createExperience() {

    this.persistSkills(this.f);
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
  openform(){
    this.form = true;
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

  edite(ided: string,  education: Education) {
    this.srve.updateEducation(ided, education)
      .subscribe(res => {console.log(res); });
    this.statute = false;
    this.toastr.warning('Data Update successfully !!', 'UPDATE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }


  editeducation(education: Education) {
    if (this.statute === false)
    {
    this.statute = true;
    this.educte = education;
  }
    else if (this.statute === true)
    {
      this.statute = false;
    }
  }
  deletee(idedu: string) {
    if (window.confirm('Are sure you want to delete this Article ?')) {

      this.srve.delete(idedu)
        .subscribe(res => {
          this.educationss = res;
          this.all();
        });
      this.statute = false;
      this.toastr.error('Data delete successfully !!', 'DELETE', {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      });
      this.srve.getAll()
        .subscribe((res: Education[]) => this.education = res);
    }
  }
  persistEducatione(data: Education) {
    this.srve.Save(data,this.id)
      .subscribe((res: Education) => this.education = [res, ...this.education]);
    this.forme = false;
    this.toastr.success('Data Store successfully !!', 'STORE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  createEducatione() {

    this.persistEducatione(this.educationForm.value);
    this.educationForm.reset();
  }
  openforme(){
    this.forme = true;
  }
  fermeforme(){
    this.forme = false;
  }

  apply()
  {
    window.location.reload();
    this.co.Save(this.id, 1).subscribe(a => {
      console.log(a);
    });
    this.toastr.success('Apply Successfully !!', 'DELETE', {
      timeOut: 3000,
      positionClass: 'toast-bottom-left'
    });
  }
  back(){
    this.step = 1;
  }
  annuler() {
    if (window.confirm('Are sure you want to Annuler Apply ?')) {
      window.location.reload();
      this.co.delete(this.id).subscribe(a => {
        console.log(a);
        this.ngOnInit();
      });
      this.toastr.error('Apply Annuled !!', 'DELETE', {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      });
    }
  }
}
