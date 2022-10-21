import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/star-ships/services/header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( private headerService:HeaderService) { }

logos: any;

ngOnInit(): void {
this.logos = this.headerService.logos;
  }

}
