import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, Observable, map, of, catchError } from 'rxjs';

import { Auth, AuthResponse } from '../interfaces/auth.interface';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseUrl: string = "http://localhost:3000/";
private _user:Auth | undefined;

get user(){
  return {...this._user!}
}

  constructor( private http: HttpClient) { }

authVer():Observable<boolean> {
  if(!localStorage.getItem('token')){
    return of(false);
  }

  return this.http.get<Auth>(`${this.baseUrl}users`)
  .pipe(
    map ( auth => {
      this._user = auth
      return true
    }))
}


login(email:string, password:string){

const url = `${this.baseUrl}login`

const body = {email , password}

  return  this.http.post<AuthResponse>(url, body)
  .pipe(
    tap( auth => {this._user = auth.user}),
    tap( auth => localStorage.setItem('token', auth.user.id)),
    tap( auth => localStorage.setItem('name', auth.user.first_name)),
    catchError(err => of(err))
    ) 
  
    
}

// INSERT USER ON DB.JSON

register( user : Auth ): Observable<Auth>{
return this.http.post<Auth>(`${this.baseUrl}users`, user)
}


}
