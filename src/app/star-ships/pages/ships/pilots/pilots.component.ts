import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs';
import { ShipsService } from 'src/app/star-ships/services/ships.service';
import { Pilot } from '../../../interfaces/pilot.interface';
import { Ships } from '../../../interfaces/ships.interface';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  pilots: Pilot[] = [];
  urlBack!: string;
  

  constructor(private activatedRoute: ActivatedRoute, private shipsService: ShipsService) { }

  ngOnInit(): void {


    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.shipsService.getShipId( id )))
      .subscribe({
        next : ( ship : Ships) => {
          ship.pilots.forEach((id:string) => 
          this.shipsService.getPilots(id)
          .subscribe((pilots : Pilot) => {
            this.pilots.push(pilots)
           }))
        }
      
      })
     
      this.activatedRoute.params
      .subscribe( ({ id }) => {
        this.urlBack = `/ships/${id}`})
    
  }




}
