import { Component, OnInit } from '@angular/core';
import { Ships, StarShips } from '../../interfaces/ships.interface';
import { ShipsService } from '../../services/ships.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

throttle = 1;
distance = 2;
page = 1;

ships: Ships[] = [];

  constructor( private shipsService: ShipsService) { }

  ngOnInit(): void {
  
    this.shipsService
    .getShips(this.page)
    .subscribe( data => {  
      this.ships = this.shipsService.setId(data)})  
    
  }

  // Infinite scroll  

onScroll():void{
  this.shipsService
    .getShips(this.page+=1)
    .subscribe( data => {
      this.ships.push(...this.shipsService.setId(data));   
    })
}


}
