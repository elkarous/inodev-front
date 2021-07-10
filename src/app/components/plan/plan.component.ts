import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';
import {Condidat} from '../../models/condidat';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  private loggedIn: boolean;

  constructor(private account: AccountService,
              private router: Router) { }

  ngOnInit(): void {
    this.account.authStatus.subscribe(value => {
      this.loggedIn = value;
    });
    if (this.loggedIn){
this.router.navigateByUrl('/dashboard');
    }
  }

}
