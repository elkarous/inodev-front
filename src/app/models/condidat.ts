import {AuthProviders} from './AuthProviders';
import {Application} from './Application';
import {Education} from './education';
import {Experience} from './experience';
import {Skills} from './skills';
import {Question} from './question';
import {CondidatOffre} from './CondidatOffre';
import {Role} from './Role';
import {Hobbies} from './hobbies';

export class Condidat {
    id: number;
  firstName: string;
  phone: string;
  lastName: string;
  gender: string;
  date_birthday: Date;
  nationality: string;
  authProvider: AuthProviders;
  userId: string;
  familyPhone :string;
  email: string;
  role : Role;
  resetToken :string;
  encryptedPassword : string;
  photo: string;
  application : Application;
  education: Education;
  experience: Experience;
  skills: Skills;
  condidatoffre: CondidatOffre;
  question:Question;
  document:Document;
  hobbies: Hobbies;
  enabled :string;

  }



