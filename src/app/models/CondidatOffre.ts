import {Condidat} from './condidat';
import {Offre} from './offre';
import {Status} from './status';
import {Document} from './document';

export class CondidatOffre {
  id: number;
  condidatoffreId: string;
  condidat: Condidat;
  offer: string;
  registeredAt: Date;
  status: Status;
  note: number;
  noteinterview: number;
  notePortugal: number;
  recommended: boolean;
  recommendedText: string;
  score: number;
  documents: Document[];
}
