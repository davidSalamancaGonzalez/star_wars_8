import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { StarShips, Ships } from '../interfaces/ships.interface';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  apiUrl: string = 'https://swapi.py4e.com/api/starships/'
  apiImage: string = 'https://starwars-visualguide.com/assets/img/starships/'

  constructor( private http: HttpClient ) { }

  getShips() {
    return this.http.get<StarShips>(this.apiUrl);
  }
  
  getShipId( id: string ){
    return this.http.get<Ships>(`${this.apiUrl}${id}`);

  }
  

  

}
