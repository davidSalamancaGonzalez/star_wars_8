import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [

  {path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},

  {path: 'ships', loadChildren: () => import ('./star-ships/star.module').then(m => m.StarModule)},

  {path: "main" , component: HomeComponent},
  
  {path: "**"   , redirectTo: "main" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
