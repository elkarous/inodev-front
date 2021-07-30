import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
public c: any[];
  constructor() { }

  set(data: any) {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('id', data.id);
  }

  handle(data) {
    this.set(data);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  getId() {
    return localStorage.getItem('id');
  }

  remove() {
    localStorage.removeItem('accessToken');
  }

  decode(payload) {
    console.log('payload : ', payload);
    return JSON.parse(atob(payload));
  }

  payload(accessToken) {
    const payload = accessToken.split('.')[1];
    console.log('payload : ', payload);
    return this.decode(payload);
  }

 getC(): any{
    return this.c;
}
setC(a: any){
    this.c = a;
}
  isValid() {
    const accessToken = this.getToken();
    const id = this.getId();

    if (accessToken) {

      const payload = this.payload(accessToken);
      if (payload) {
        return id == payload.id;
      }
    }
    return false;
  }

  getInfos() {

    const accessToken = this.getToken();

    if (accessToken) {
      const payload = this.payload(accessToken);
      return payload ? payload : null;
    }

    return null
  }


  loggedIn() {
    return this.isValid();
  }
}
