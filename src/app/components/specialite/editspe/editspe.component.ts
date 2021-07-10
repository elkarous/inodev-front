import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {SignupServiceService} from '../../../services/signup-service.service';
import {SpecialiteService} from '../../../services/specialite.service';
import {ToastrService} from 'ngx-toastr';
import {TokenService} from '../../../services/token.service';

@Component({
  selector: 'app-editspe',
  templateUrl: './editspe.component.html',
  styleUrls: ['./editspe.component.css']
})
export class EditspeComponent implements OnInit {
  public item: any;

  constructor(private account: AccountService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              public sign: SignupServiceService,
              public off: SpecialiteService,
              private toastr: ToastrService,
              private Token: TokenService) { }

  ngOnInit(): void {
    this.allOffre();
  }
  allOffre() {

    this.off.getnom(this.route.snapshot.params.id).subscribe(res => {
      console.log(res);
      this.item = res;

    });
  }
}
