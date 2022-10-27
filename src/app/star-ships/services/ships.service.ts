import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { StarShips, Ships } from '../interfaces/ships.interface';
import { Pilot } from '../interfaces/pilot.interface';
import { Film } from '../interfaces/movies.interface';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {


  apiUrl: string = 'https://swapi.py4e.com/api';
  id: string = "";

  constructor(private http: HttpClient) { }


  getShips(page: number) {
    return this.http.get<StarShips>(`${this.apiUrl}/starships/?page=${page}`);
  }

  getShipId(id: string) {
    this.id = id;
    return this.http.get<Ships>(`${this.apiUrl}/starships/${id}`);
  }

  getPilots(id:string | undefined){
      return this.http.get<Pilot>(`${id}`); 
  }
  
  getFilms(id:string | undefined){
      return this.http.get<Film>(`${id}`);
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
