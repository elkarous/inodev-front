import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OffreService} from '../../../services/offre.service';

@Component({
  selector: 'app-editoffre',
  templateUrl: './editoffre.component.html',
  styleUrls: ['./editoffre.component.css']
})
export class EditoffreComponent implements OnInit {
  public offre1: any;
  private id: number;
  public o: any;
  constructor(public route: ActivatedRoute, public off: OffreService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.off.getid(this.id, this.route.snapshot.params.id1).subscribe(res => {
      this.offre1 = res;
      console.log(this.offre1);
  });
  }
  edit(b: string){
    this.off.update(b, this.offre1).subscribe(rs => {
      console.log(rs);
      this.o = rs;
    });
  }
}
