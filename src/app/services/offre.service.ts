import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Offre} from '../models/offre';
import {SubDecipline} from '../models/subDecipline';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Offre[]>{
    return this.http.get<Offre[]>(`${environment.baseUrl}/offer` );
  }
  getOfferbyType(type: string):Observable<Offre>{
    return this.http.get<Offre>(`${environment.baseUrl}/offer/getaAll/` + type);
  }
  getohoto(id: string): Observable<any>{
    return this.http.get(`${environment.baseUrl}/offer/Imgarticles/` + id);
  }
  get(id: number):Observable <Offre>{
    return this.http.get<Offre>(`${environment.baseUrl}/offer/` + id );
  }
 public getid(id: number):Observable<String>{
    return this.http.get<string>(`${environment.baseUrl}/offer/id/` + id );

  }
  public getcat(id: string, type: string):Observable<Offre>{
    return this.http.get<Offre>(`${environment.baseUrl}/offer/cat/` + id + '/' + type);
  }
  public getsearch(spe: string, duree: string, niveau: string, type: string){
    return this.http.get(`${environment.baseUrl}/offer/` + spe + '/' + duree + '/' + niveau + '/' + type);
  }
  public getbynom(){
    return this.http.get(`${environment.baseUrl}/offer/spe`);
  }
  delete(id: number) {

    return this.http.delete(`${environment.baseUrl}/offer/` + id);
  }
  save(photo: FormData){
    return this.http.post(`${environment.baseUrl}/offer`,  photo);
  }
  getbyId(id:number) : Observable<Offre>{
    return this.http.get<Offre>(`${environment.baseUrl}/offer/` + id);
  }

  update(id: number, a: Offre){
    return this.http.put(`${environment.baseUrl}/offer/edit/` + id,  a);

  }
}
