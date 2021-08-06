import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Education} from '../models/education';
import {Condidat} from '../models/condidat';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Education[]> {

    return this.http.get<Education[]> (`${environment.baseUrl}/users/education`);
  }

  Save(data: Education): Observable<Education> {
    return this.http.post<Education>(`${environment.baseUrl}/users/education`, data);
  }
  get(id: string): Observable<Education>{
    return this.http.get<Education>(`${environment.baseUrl}/users/education/` + id);
  }
  getEducationBYUser(id: string):Observable<Education[]>{
    return this.http.get<Education[]>(`${environment.baseUrl}/users/education/get/` + id);
  }
  updateEducation(id: string, data: Education) :  Observable<Education>{
    return this.http.put<Education>(`${environment.baseUrl}/users/education/` + id, data);
  }
  delete(idedu: string){
    return this.http.delete(`${environment.baseUrl}/users/education/` + idedu);
  }
}
