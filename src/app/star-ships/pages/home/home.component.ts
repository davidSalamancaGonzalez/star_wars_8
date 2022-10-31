import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
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
    })}
  
  update(result:any){
    this.showContainer = result.matches;
  }
  
  }

