import {Skills} from './skills';
import {Specialite} from './specialite';

export class Offre {
  image: string;
  type: string;
  offreId: string;
  nom: string;
  organisation: string;
  dateDebut: Date;
  dateFin: Date;
  description: string;
  video: string;
  niveau: string;
  duree: string;
  prix: number;
  processus: string;
  skills: any;
  specialite: any;
  supervisor: number;
}
