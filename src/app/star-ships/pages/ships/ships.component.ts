import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Ships } from '../../interfaces/ships.interface';
import { ShipsService } from '../../services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

ships! : Ships;
imageUrl: string = "https://starwars-visualguide.com/assets/img/starships/"
pilots:boolean = false;
films:boolean = false;
idUrlPilots: string = "";
idUrlFilms:string = "";


  constructor( private activatedRoute: ActivatedRoute, private shipsService: ShipsService) { }

  ngOnInit() {
    
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.shipsService.getShipId( id )),
      )
      .subscribe( ships => {
        this.ships = ships;
        let reg = /['0-9']/ig
        this.ships.id =  ships.url.slice(ships.url.length - 4, ships.url.length -1).match(reg)?.join('');
        
        if(ships.pilots.length > 0){
          this.pilots = true;
          this.idUrlPilots = `/ships/${this.ships.id}/pilots`
        }
        if(ships.films.length > 0){
          this.films = true;
          this.idUrlFilms = `/ships/${this.ships.id}/film`
        }

      })   
          
  }


}
 