import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SubDecipline} from '../models/subDecipline';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Project} from '../models/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService{

  constructor(private http: HttpClient) { }

  getbyId(id:number) : Observable<Project>{
    return this.http.get<Project>(`${environment.baseUrl}/Project/` + id);
  }

}
