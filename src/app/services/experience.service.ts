import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Experience} from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.baseUrl}/experience`);
  }

  Save(data: Experience) {
    return this.http.post(`${environment.baseUrl}/experience`, data);
  }
  get(id: string){
    return this.http.get(`${environment.baseUrl}/experience/` + id);
  }
  getuser(id: string){
    return this.http.get(`${environment.baseUrl}/experience/get/` + id);
  }
  updateExperience(id: string, data: Experience) {
    return this.http.put(`${environment.baseUrl}/experience/` + id, data);
  }
  delete(idedu: string){
    return this.http.delete(`${environment.baseUrl}/experience/` + idedu);
  }
}
