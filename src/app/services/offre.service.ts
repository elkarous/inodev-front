import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Offre} from '../models/offre';
import {Project} from '../models/project';
import {CondidatOffre} from '../models/CondidatOffre';

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
  getCandidates(id: string):Observable <CondidatOffre[]>{
    return this.http.get<CondidatOffre[]>(`${environment.baseUrl}/offer/getCondidates/` + id );
  }
  getCandidatOffer(id: number):Observable <CondidatOffre>{
    return this.http.get<CondidatOffre>(`${environment.baseUrl}/condidatoffre/` + id );
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
  update(id: number, a: Offre){
    return this.http.put(`${environment.baseUrl}/offer/edit/` + id,  a);
  }
  updatApplication(application:CondidatOffre){
    return this.http.put(`${environment.baseUrl}/condidatoffre` ,  application);
  }
getAllProject():Observable<Project[]>{
    return this.http.get<Project[]>(`${environment.baseUrl}/Project`)
}
  AddProject(project:Project):Observable<Project>{
    return this.http.post<Project>(`${environment.baseUrl}/Project`,project)
  }
  UpdateProject(project:Project):Observable<Project>{
    return this.http.put<Project>(`${environment.baseUrl}/Project`,project)
  }
  getProject(id:number):Observable<Project>{
    return this.http.get<Project>(`${environment.baseUrl}/Project`+id)
  }
  DeleteProject(id:number):Observable<Project>{
    return this.http.delete<Project>(`${environment.baseUrl}/Project`+id)
  }

}
