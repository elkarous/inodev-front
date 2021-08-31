import {Condidat} from './condidat';
import {Offre} from './offre';
import {Document} from './document';

export class Skills{

  id : number;
  skillsId: string;
  niveau: string;
  nom: string;
  certifier: boolean;
  condidat : Condidat;
  offre : Offre;
  document:Document;


}
