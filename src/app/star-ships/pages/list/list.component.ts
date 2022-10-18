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
    .subscribe( data => { this.ships = data.results })
  }

}
