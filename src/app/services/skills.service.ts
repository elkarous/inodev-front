import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Skills} from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.baseUrl}/skills`);
  }
  skillsoffre(id: number) {
    return this.http.get(`${environment.baseUrl}/skills/offre/` + id);
  }

  Save(data: Skills) {
    return this.http.post(`${environment.baseUrl}/skills`, data);
  }
  get(id: string){
    return this.http.get(`${environment.baseUrl}/skills/` + id);
  }
  getuser(id: string){
    return this.http.get(`${environment.baseUrl}/skills/get/` + id);
  }
  updateSkills(id: string, data: Skills) {
    return this.http.put(`${environment.baseUrl}/skills/` + id, data);
  }
  delete(idedu: string){
    return this.http.delete(`${environment.baseUrl}/skills/` + idedu);
  }
}
