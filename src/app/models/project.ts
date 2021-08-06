import {Offre} from './offre';
import {SubDecipline} from './subDecipline';

export class Project{
  id : number;
  description : string;
  nom : string;
  acronyme : string;
  subDecipline : SubDecipline;
  offers : Offre[];

}
