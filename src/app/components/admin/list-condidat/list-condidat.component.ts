import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../../services/signup-service.service';
import {TokenService} from '../../../services/token.service';
import {HttpClient} from '@angular/common/http';
import {Condidat} from '../../../models/condidat';
import {Location} from '@angular/common';
import {Role} from '../../../models/Role';
import {ToastrService} from 'ngx-toastr';
import {error} from '@angular/compiler-cli/src/transformers/util';

@Component({
  selector: 'app-list-condidat',
  templateUrl: './list-condidat.component.html',
  styleUrls: ['./list-condidat.component.css']
})
export class ListCondidatComponent implements OnInit {
  public id: any;
  term: string;
  public addc = false;
  public adds = false;
  public addco = false;

  constructor(
    private account: AccountService,
    private router: Router,
    public sign: SignupServiceService,
    private Token: TokenService,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private location: Location,
    private http: HttpClient) {
  }

  candidates: Condidat[];
  con: Condidat;
condidate:Condidat;
  ngOnInit(): void {
   this.getAllUsers();
    this.con = new Condidat();
    this.id = this.Token.getInfos().id;
this.condidate=new Condidat();
    this.sign.get(this.id).subscribe((res: Condidat) => {

      this.con = res;
    });
  }

  getAllUsers() {

    this.sign.getAll().subscribe(res => {
      console.log(res);
      this.candidates = res;
    });
  }

  backClicked() {
    this.location.back();
  }

  Clicked() {
    this.addc = true;
  }

  Click() {
    this.addc = false;
  }

  Clickeds() {
    this.adds = true;
  }

  Clicks() {
    this.adds = false;
  }

  Clickedc() {
    this.addco = true;
  }

  Clickc() {
    this.addco = false;
  }

  delete(id: string) {
    if (window.confirm('Are sure you want to delete this Article ?')) {
      this.sign.delete(id).subscribe((res: Condidat) => {
        console.log(res);
        this.getAllUsers();
      });
    }
  }
  addCondidate(){
    this.condidate.role=Role.Student
    this.sign.Save(this.condidate).subscribe(data=>{
      this.toast.success("Candidate added ")
    },error=>{
      this.toast.error("same thing Wrong")
    }


    );
    this.getAllUsers()
  }
}
