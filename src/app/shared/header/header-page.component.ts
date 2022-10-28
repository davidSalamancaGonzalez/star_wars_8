import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../star-ships/services/header.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../../auth/services/auth.service';
import { Auth } from 'src/app/auth/interfaces/auth.interface';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
 
  showContainer:boolean = true;
  user!:Auth;
  
  constructor( private headerService:HeaderService,
               public breakpointObserver: BreakpointObserver,
               private authService: AuthService) { }
  
  logos: any;
  
   get auth() {
    return this.authService.user;
  }

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
