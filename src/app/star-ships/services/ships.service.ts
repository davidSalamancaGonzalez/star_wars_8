import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { StarShips } from '../interfaces/ships.interface';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  apiUrl: string = 'https://swapi.py4e.com/api/starships/'

  constructor( private http: HttpClient ) { }

  getShips() {
    return this.http.get<StarShips>(this.apiUrl)
  }

  

}
