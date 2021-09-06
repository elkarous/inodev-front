import {Condidat} from './condidat';
import {AnneeEducation} from './annee';

export class Education{
  id : number;
  nomFaculte: string;
  pays: string;
  dateDebut: Date;
  dateFin: Date;
  nomDiplome: string;
  specialite: string;
  niveau: string;
  condidat : Condidat;
  educationId: string;
  annees:AnneeEducation[];



}
