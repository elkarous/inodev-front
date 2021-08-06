import {Skills} from './skills';
import {Specialite} from './specialite';
import {CondidatOffre} from './CondidatOffre';
import {Project} from './project';

export class Offre {

    id : number;
    image: string;
    acronym: string;
    type: string;
    offreId: string;
    nom: string;
    organisation: string;
    dateDebut: Date;
    dateFin: Date;
    description: string;
    video: string;
  duree: string;
    niveau: string;
    prix: number;
  supervisor: number;
    processus: string;
  condidatoffre: CondidatOffre;
    skills: Skills[];
    project : Project;


}
