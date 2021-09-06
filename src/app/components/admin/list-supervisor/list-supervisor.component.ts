import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupServiceService} from '../../../services/signup-service.service';
import {TokenService} from '../../../services/token.service';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Condidat} from '../../../models/condidat';
import {Role} from '../../../models/Role';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-supervisor',
  templateUrl: './list-supervisor.component.html',
  styleUrls: ['./list-supervisor.component.css']
})
export class ListSupervisorComponent implements OnInit {

  public id: any;
  term: string;
  public addc = false;
  public adds = false;
  public addco = false;
  condidate: Condidat;


  constructor(
    private account: AccountService,
    private router: Router,
    public sign: SignupServiceService,
    private Token: TokenService,
    private route: ActivatedRoute,
    private location: Location,
    private toast:ToastrService,
    private http: HttpClient) {
  }

  candidates: Condidat[];
  con: Condidat;

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
    this.condidate.role=Role.Superviser
    this.sign.Save(this.condidate).subscribe(data=>{
        this.toast.success("Supervisor added ")
      },error=>{
        this.toast.error("same thing Wrong")
      }


    );
    this.getAllUsers()
  }
}
