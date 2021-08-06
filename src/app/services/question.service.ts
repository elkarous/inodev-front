import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Question} from '../models/question';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) { }

  getAll():Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.baseUrl}/question`);
  }

  Save(data: Question):Observable<Question> {
    return this.http.post<Question>(`${environment.baseUrl}/question`, data);
  }
  get(id: string):Observable<Question>{
    return this.http.get<Question>(`${environment.baseUrl}/question/` + id);
  }
  updateQuestion(id: string, data: Question):Observable<Question> {
    return this.http.put<Question>(`${environment.baseUrl}/question/` + id, data);
  }
  delete(idedu: string){
    return this.http.delete(`${environment.baseUrl}/question/` + idedu);
  }
}
