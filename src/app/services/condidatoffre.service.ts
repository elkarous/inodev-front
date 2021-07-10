import { Injectable } from '@angular/core';
import {Education} from '../models/education';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CondidatoffreService {

  constructor(private http: HttpClient) { }

  Save(id: number, statut: number) {
    return this.http.post(`${environment.baseUrl}/condidatoffre/` + id, statut);
  }
  accept(id: number) {
    return this.http.post(`${environment.baseUrl}/condidatoffre/accept`, id);
  }
  exist(id: number) {
    return this.http.get(`${environment.baseUrl}/condidatoffre/exist/` + id);
  }
  delete(id: number) {
    return this.http.delete(`${environment.baseUrl}/condidatoffre/exist/` + id);
  }
  myapp(){
    return this.http.get(`${environment.baseUrl}/condidatoffre/myapp`);
  }
  filter(id: number){
    return this.http.get(`${environment.baseUrl}/condidatoffre/myapp/` + id);
  }
  calendar(id: number){
    return this.http.get(`${environment.baseUrl}/condidatoffre/calendar/` + id);
  }
  calendar1(id: number){
    return this.http.get(`${environment.baseUrl}/condidatoffre/calendar1/` + id);
  }
  calendar2(id: number){
    return this.http.get(`${environment.baseUrl}/condidatoffre/calendar2/` + id);
  }

}
