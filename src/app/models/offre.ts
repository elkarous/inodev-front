import {Skills} from './skills';
import {Specialite} from './specialite';
import {CondidatOffre} from './CondidatOffre';
import {Project} from './project';
import {Document} from './document';

export class Offre {

    id : number;
  startdateoffer:Date;
    image: string;
    acronym: string;
    type: string;
    offreId: string;
    nom: string;
    adress: string;
  priceDetails: string;
    organisation: string;
    dateDebut: Date;
    dateFin: Date;
    startdateoffer: Date;
    description: string;
    video: string;
    duree: string;
    niveau: string;
    prix: number;
    supervisor: number;
    processus: string;
  priceDetails:string;
    condidatoffre: CondidatOffre;
    skills: Skills[];
    project : Project[];
    documents: Document[];


}
