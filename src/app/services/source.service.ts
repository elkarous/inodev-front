import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Source} from '../models/Source';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.baseUrl}/source`);
  }

  Save(data: Source) {
    return this.http.post(`${environment.baseUrl}/source`, data);
  }
  get(id: string){
    return this.http.get(`${environment.baseUrl}/source/` + id);
  }
  updateSource(id: string, data: Source) {
    return this.http.put(`${environment.baseUrl}/source/` + id, data);
  }
  delete(idedu: string){
    return this.http.delete(`${environment.baseUrl}/source/` + idedu);
  }
}
