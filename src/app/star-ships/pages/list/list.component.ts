import { Component, OnInit } from '@angular/core';
import { Ships, StarShips } from '../../interfaces/ships.interface';
import { ShipsService } from '../../services/ships.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

page = 1;
ships: Ships[] = [];

  constructor( private shipsService: ShipsService) { }

  ngOnInit(): void {
  
    this.shipsService
    .getShips(this.page)
    .subscribe( data => {  
      this.ships = data.results;
      this.ships = this.shipsService.setId(data)})  
  }

  next(){
    this.shipsService
    .getShips( this.page+=1 ) 
    .subscribe( data => {
      this.ships =  this.shipsService.setId(data)
      this.ships.push(...data.results)})
  }
  
}
