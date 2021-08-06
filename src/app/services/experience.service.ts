import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Experience} from '../models/experience';
import {Observable} from 'rxjs';
import {Education} from '../models/education';
import {Condidat} from '../models/condidat';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${environment.baseUrl}/experience`);
  }

  Save(data: Experience) : Observable<Experience>{
    return this.http.post<Experience>(`${environment.baseUrl}/experience`, data);
  }
  get(id: string) : Observable<Experience>{
    return this.http.get<Experience>(`${environment.baseUrl}/experience/` + id);
  }
  getEperienceBYUser(id: string):Observable< Experience[]>{
    return this.http.get<Experience[]>(`${environment.baseUrl}/experience/get/` + id);
  }
  updateExperience(id: string, data: Experience) : Observable<Experience>{
    return this.http.put<Experience>(`${environment.baseUrl}/experience/` + id, data);
  }
  delete(idedu: string){
    return this.http.delete(`${environment.baseUrl}/experience/` + idedu);
  }
}
