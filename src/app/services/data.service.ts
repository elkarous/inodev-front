import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DayPilot} from 'daypilot-pro-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date, id: number): Observable<any[]> {
    return this.http.get('http://localhost:8080/api/events?from=' + from.toString() + '&to=' + to.toString() + '&id='
      + id.toString()) as Observable<any>;
  }

  getResources(): Observable<any[]> {
    return this.http.get('http://localhost:8080/api/resources') as Observable<any>;
  }

  createEvent(data: EventCreateParams): Observable<EventData> {
    return this.http.post('http://localhost:8080/api/events/create', data) as Observable<any>;
  }

  moveEvent(data: EventMoveParams): Observable<EventData> {
    return this.http.post('http://localhost:8080/api/events/move', data) as Observable<any>;
  }

  deleteEvent(data: EventDeleteParams): Observable<EventData> {
    return this.http.post('http://localhost:8080/api/events/delete', data) as Observable<any>;
  }

}

export interface EventCreateParams {
  start: string;
  end: string;
  text: string;
  resource: string | number;
  offre: number;
}

export interface EventMoveParams {
  id: string | number;
  start: string;
  end: string;
  resource: string | number;
  offre: number;
}

export interface EventDeleteParams {
  id: string | number;
}

export interface EventData {
  id: string | number;
  start: string;
  end: string;
  text: string;
  resource: string | number;
  offre: number;
}
