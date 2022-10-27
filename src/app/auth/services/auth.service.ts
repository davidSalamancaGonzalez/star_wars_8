import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, Observable, map, of } from 'rxjs';

import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseUrl: string = "http://localhost:3000/usuarios/1";
private _user:Auth | undefined;

get user(){
  return {...this._user!}
}

  constructor( private http: HttpClient) { }

authVer():Observable<boolean> {
  if(!localStorage.getItem('token')){
    return of(false);
  }

  return this.http.get<Auth>(this.baseUrl)
  .pipe(
    map ( auth => {
      this._user = auth
      return true
    }) 
  )
}

login(){
  console.log(this.baseUrl);
  return this.http.get<Auth>(this.baseUrl)
  .pipe(
    tap( auth => this._user = auth),
    tap( auth => localStorage.setItem('token', auth.id) ),
    )
  
}

// INSERT USER ON DB.JSON

insertUser( user : Auth ): Observable<Auth>{
return this.http.post<Auth>(`${this.baseUrl}`, user)
}


}
