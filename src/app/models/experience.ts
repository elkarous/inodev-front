import {Condidat} from './condidat';

export class Experience{
    id :number;
    experienceId: string;
    job_title: string;
    organization: string;
    pays: string;
    dateDebut: Date;
    dateFin: Date;
    type: string;
    condidat : Condidat;
}
