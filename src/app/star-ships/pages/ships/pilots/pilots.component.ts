import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ShipsService } from 'src/app/star-ships/services/ships.service';
import { Pilot, Pilots } from '../../../interfaces/pilot.interface';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  pilots: Pilot[] = [];
  id!:string | undefined;
  urlBack!: string;

  constructor(private activatedRoute: ActivatedRoute, private shipsService: ShipsService) { }

  ngOnInit(): void {


    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.shipsService.getShipId( id )),
      )
      .subscribe( ships => {
        let reg = /['0-9']/ig
        this.id =  ships.url.slice(ships.url.length - 4, ships.url.length -1).match(reg)?.join('');
        this.urlBack = `/ships/${this.id}` 
      
      this.shipsService.getPilots(this.id)
        .subscribe(resp => {
         this.pilots.push (resp)
        
        })

      }) 
      

  }

}
