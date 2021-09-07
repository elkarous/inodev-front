import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {SubDecipline} from '../models/subDecipline';
import {Specialite} from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class SubDeciplineService{

  constructor(private http: HttpClient) { }

  getAll():Observable<SubDecipline[]>{
    return this.http.get<SubDecipline[]>(`${environment.baseUrl}/subDecipline` );
  }

  getbyId(id:number) : Observable<SubDecipline>{
    return this.http.get<SubDecipline>(`${environment.baseUrl}/subDecipline/` + id);
  }
}
