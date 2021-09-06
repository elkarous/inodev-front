import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Document} from '../models/document';
import {Condidat} from '../models/condidat';
import {Skills} from '../models/skills';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${environment.baseUrl}/document`);
  }

  Save(data: FormData) {
    return this.http.post(`${environment.baseUrl}/document`, data);
  }
  get(id: string){
    return this.http.get(`${environment.baseUrl}/document/` + id);
  }
  download(id: string){
    return this.http.get(`${environment.baseUrl}/document/download/` + id);
  }
  getDocumentByUser(id: string){
    return this.http.get(`${environment.baseUrl}/document/get/` + id);
  }
  updateDocument(id: string, data: FormData){
    return this.http.put(`${environment.baseUrl}/document/` + id, data);
  }
  dowload(nom:string):Observable<any>{
    return  this.http.get<any>(`${environment.baseUrl}/document/download/`+nom);
  }
  delete(idedu: string){
    return this.http.delete(`${environment.baseUrl}/document/` + idedu);
  }
}
