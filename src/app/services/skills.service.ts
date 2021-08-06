import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Skills} from '../models/skills';
import {Observable} from 'rxjs';
import {Condidat} from '../models/condidat';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Skills[]> {
    return this.http.get<Skills[]>(`${environment.baseUrl}/skills`);
  }
  skillsoffre(id: number):Observable<Skills[]> {
    return this.http.get<Skills[]>(`${environment.baseUrl}/skills/offre/` + id);
  }

  Save(data: Skills) : Observable<Skills>{
    return this.http.post<Skills>(`${environment.baseUrl}/skills`, data);
  }
  get(id: string): Observable<Skills>{
    return this.http.get<Skills>(`${environment.baseUrl}/skills/` + id);
  }
  getskillBYUser(id: string):Observable<Skills[]>{
    return this.http.get<Skills[]>(`${environment.baseUrl}/skills/get/` + id);
  }
  updateSkills(id: string, data: Skills):Observable<Skills> {
    return this.http.put<Skills>(`${environment.baseUrl}/skills/` + id, data);
  }
  delete(idedu: string){
    return this.http.delete(`${environment.baseUrl}/skills/` + idedu);
  }
}
