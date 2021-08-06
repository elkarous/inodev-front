import {Condidat} from './condidat';
import {Offre} from './offre';
import {Status} from './status';

export class CondidatOffre{
  id : number;
  condidatoffreId: string;
  condidat:Condidat;
  offre:Offre;
  registeredAt: Date;
  status: Status;
  note:number;

}
