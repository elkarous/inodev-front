import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Specialite} from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Specialite[]>{
    return this.http.get<Specialite[]>(`${environment.baseUrl}/specialite` );
  }
  getohoto(id: string): Observable<any>{
    return this.http.get(`${environment.baseUrl}/specialite/Imgarticles/` + id);
  }
  getnom(id: string){
    return this.http.get(`${environment.baseUrl}/specialite/a/` + id);
  }
  getoffreId(id: number){
    return this.http.get(`${environment.baseUrl}/specialite/o/` + id);
  }
  delete(id: string) {

    return this.http.delete(`${environment.baseUrl}/specialite/` + id);
  }
  save(photo: FormData): Observable<Specialite>{
    return this.http.post<Specialite>(`${environment.baseUrl}/specialite`,  photo);
  }
  update(id: string, a: any) : Observable<Specialite>{
    return this.http.put<Specialite>(`${environment.baseUrl}/specialite/edit/` + id,  a);
  }
  getbyId(id:number) : Observable<Specialite>{
    return this.http.get<Specialite>(`${environment.baseUrl}/specialite/` + id);
  }
}
