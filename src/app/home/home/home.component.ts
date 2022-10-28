import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showContainer:boolean = true;
  
  constructor( public breakpointObserver: BreakpointObserver) { }
  
  size!: boolean;

  ngOnInit(): void {
    
    const isSmallScreen = this.breakpointObserver.observe([
      '(min-width: 576px)'
    ])
    
    isSmallScreen.subscribe(result => {
      this.update(result)
    })
 
  }
  
  update(result:any){
    this.size = result.matches;
  }
  
  }
