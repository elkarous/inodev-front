import {Offre} from './offre';
import {SubDecipline} from './subDecipline';

export class Project{
  id : number;
  partenar:string;
  orginistaion:string;
  description : string;
  nom : string;
  acronyme : string;
  subDecipline : SubDecipline;
  offers : Offre[];
  endDate:Date;
}
