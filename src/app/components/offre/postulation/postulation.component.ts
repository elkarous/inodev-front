import { Component, OnInit } from '@angular/core';
import {CondidatoffreService} from '../../../services/condidatoffre.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.css']
})
export class PostulationComponent implements OnInit {
  public condidate: any;
 public bo = false;
  constructor(private co: CondidatoffreService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.co.filter(this.route.snapshot.params.id).subscribe(res => {console.log(res); this.condidate = res; });
  }
a(a: number){
  if (window.confirm('Are sure you want to delete this Offre?')) {
    this.co.accept(a).subscribe(res => console.log(res));
    window.location.reload();
}}
  b(){
    this.bo = true;
  }
}
