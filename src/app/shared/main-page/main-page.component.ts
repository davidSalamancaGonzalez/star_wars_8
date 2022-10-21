import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../star-ships/services/header.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-header-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 
  showContainer:boolean = true;
  
  constructor( private headerService:HeaderService,
               public breakpointObserver: BreakpointObserver) { }
  
  logos: any;
  

  ngOnInit(): void {
    this.logos = this.headerService.logos;
   
    const isSmallScreen = this.breakpointObserver.observe([
      '(min-width: 960px)'
    ])
    
    isSmallScreen.subscribe(result => {
      this.update(result)
    })
 
  }
  
  update(result:any){
    this.showContainer = result.matches;
  }
  
  }
