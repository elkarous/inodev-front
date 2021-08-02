import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Document} from '../models/document';
import {Condidat} from '../models/condidat';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${environment.baseUrl}/document`);
  }

  Save(data: FormData):Document {
    return this.http.post(`${environment.baseUrl}/document`, data);
  }
  get(id: string):Document{
    return this.http.get(`${environment.baseUrl}/document/` + id);
  }
  download(id: string):Document{
    return this.http.get(`${environment.baseUrl}/document/download/` + id);
  }
  getuser(id: string):Condidat{
    return this.http.get(`${environment.baseUrl}/document/get/` + id);
  }
  updateDocument(id: string, data: FormData) :Document{
    return this.http.put(`${environment.baseUrl}/document/` + id, data);
  }
  delete(idedu: string){
    return this.http.delete(`${environment.baseUrl}/document/` + idedu);
  }
}
