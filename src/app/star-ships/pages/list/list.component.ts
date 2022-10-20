import { Component, OnInit } from '@angular/core';
import { Ships, StarShips } from '../../interfaces/ships.interface';
import { ShipsService } from '../../services/ships.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

ships: Ships[] = [];

  constructor( private shipsService: ShipsService) { }

  ngOnInit(): void {

    this.shipsService.getShips()
    .subscribe( data => { 
      
      this.ships = data.results;

      this.ships.map( ship => {
        let reg = /['0-9']/ig;
        let result = ship.url.slice(ship.url.length - 4, ship.url.length -1).match(reg)?.join('')
        ship.id  = result;
      })
     })
    
  }


}
