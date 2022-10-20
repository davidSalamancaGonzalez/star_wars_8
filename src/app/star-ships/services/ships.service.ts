import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { StarShips, Ships } from '../interfaces/ships.interface';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {


  apiUrl: string = 'https://swapi.py4e.com/api/starships/'
  // apiImage: string = 'https://starwars-visualguide.com/assets/img/starships/'



  constructor(private http: HttpClient) { }
  page!: number;

  getShips(page: number) {
    return this.http.get<StarShips>(`${this.apiUrl}?page=${page}`);
  }

  getShipId(id: string) {
    return this.http.get<Ships>(`${this.apiUrl}${id}`);

  }

  setId(ships: StarShips) {
    ships.results.map(ship => {
      let reg = /['0-9']/ig;
      let result = ship.url.slice(ship.url.length - 4, ship.url.length - 1).match(reg)?.join('')
      ship.id = result
    })
    return ships.results
  }

}
