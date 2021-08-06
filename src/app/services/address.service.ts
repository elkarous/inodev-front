import { Address } from './../models/address';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAll():Observable <Address[]>{
    return this.http.get<Address[]>(`${environment.baseUrl}/addresses`);
  }

  Save(data: Address):Observable<Address> {
    return this.http.post<Address>(`${environment.baseUrl}/addresses`, data);
  }
}
