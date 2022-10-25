import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [

  {path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},

  {path: 'ships', loadChildren: () => import ('./star-ships/star.module').then(m => m.StarModule),
  canLoad     : [ AuthGuard ],
  canActivate : [ AuthGuard ]},

  {path: "main" , component: HomeComponent},
  
  {path: "**"   , redirectTo: "main" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
