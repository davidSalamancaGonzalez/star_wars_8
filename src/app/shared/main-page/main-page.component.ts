import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../star-ships/services/header.service';
import { Logos } from '../../star-ships/interfaces/header.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  logos: Logos[] = [];

  constructor( private headerservice: HeaderService) {

   }

  ngOnInit(): void {
    this.logos = this.headerservice.logos
  }

}
