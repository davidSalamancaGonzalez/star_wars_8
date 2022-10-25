import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     

      return this.authService.authVer()
      .pipe(
        tap( authentic => {
          if( !authentic ){ 
            this.router.navigate(['/auth/login'])
          } })
        )
      
  }
  
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      console.log('load');
      return this.authService.authVer()
      .pipe(
        tap( authentic => {
          if( !authentic ){ 
            this.router.navigate(['/auth/login'])
          } })
        )

    
  }
}

