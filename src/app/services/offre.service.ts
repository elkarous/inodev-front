import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${environment.baseUrl}/offre` );
  }
  getaAll(type: string){
    return this.http.get(`${environment.baseUrl}/offre/getaAll/` + type);
  }
  getohoto(id: string): Observable<any>{
    return this.http.get(`${environment.baseUrl}/offre/Imgarticles/` + id);
  }
  get(id: string, type: string){
    return this.http.get(`${environment.baseUrl}/offre/` + id + '/' + type);
  }
 public getid(id: number, type: string){
    return this.http.get(`${environment.baseUrl}/offre/id/` + id + '/' + type);
  }
  public getcat(id: string, type: string){
    return this.http.get(`${environment.baseUrl}/offre/cat/` + id + '/' + type);
  }
  public getsearch(spe: string, duree: string, niveau: string, type: string){
    return this.http.get(`${environment.baseUrl}/offre/` + spe + '/' + duree + '/' + niveau + '/' + type);
  }
  public getbynom(){
    return this.http.get(`${environment.baseUrl}/offre/spe`);
  }
  delete(id: string) {

    return this.http.delete(`${environment.baseUrl}/offre/` + id);
  }
  save(photo: FormData){
    return this.http.post(`${environment.baseUrl}/offre`,  photo);
  }
  update(id: string, a: any){
    return this.http.put(`${environment.baseUrl}/offre/edit/` + id,  a);
  }
}
