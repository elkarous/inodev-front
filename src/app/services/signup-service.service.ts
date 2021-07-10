import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Address} from '../models/address';
import {environment} from '../../environments/environment';
import {Condidat} from '../models/condidat';
import {Observable} from 'rxjs';
const requestHeaders = new HttpHeaders();
requestHeaders.append('Content-Type', 'image/png');

const httpOptions = {
  headers: requestHeaders
};

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
  host = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {}

  Save(data: Condidat) {
    return this.http.post(`${environment.baseUrl}/condidat`, data, this.httpOptions);
  }

  updateC(id: string, photo: FormData){
  return this.http.put(`${environment.baseUrl}/condidat/` + id,  photo);
  }
  get(id: string){
    return this.http.get(`${environment.baseUrl}/condidat/` + id);
  }
  delete(id: string){
    return this.http.delete(`${environment.baseUrl}/condidat/` + id);
  }
  getohoto(id: string){
    return this.http.get(`${environment.baseUrl}/condidat/img/` + id);
  }
  getAll(){
    return this.http.get(`${environment.baseUrl}/condidat` );
  }
}
