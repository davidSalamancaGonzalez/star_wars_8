import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Film } from 'src/app/star-ships/interfaces/movies.interface';
import { Ships } from 'src/app/star-ships/interfaces/ships.interface';
import { ShipsService } from 'src/app/star-ships/services/ships.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  film    : Film[] = [];
  id!     : string | undefined;
  urlBack!: string;
  poster! : number;

  constructor( private activatedRoute: ActivatedRoute, 
               private shipsService: ShipsService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.shipsService.getShipId( id )))
      .subscribe({
        next : ( ship : Ships) => {
          ship.films.forEach((id:string) => 
          this.shipsService.getFilms(id)
          .subscribe((film : Film) => {
            this.film.push(film),
          this.poster = film.episode_id}))
        }
      
      })
     
      this.activatedRoute.params
      .subscribe( ({ id }) => {
        this.urlBack = `/ships/${id}`})
    
      
    
  }
      


  }


