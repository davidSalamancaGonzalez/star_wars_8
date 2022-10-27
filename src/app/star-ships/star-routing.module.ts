import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { ShipsComponent } from './pages/ships/ships.component';
import { HomeComponent } from './pages/home/home.component';
import { PilotsComponent } from './pages/ships/pilots/pilots.component';
import { MoviesComponent } from './pages/ships/movies/movies.component';

const routes: Routes = [
  
  { path: '',
    component: HomeComponent,
    children: [
      { path: 'listado'     , component: ListComponent},
      { path: ':id/pilots'  , component: PilotsComponent},
      { path: ':id/film'    , component: MoviesComponent},
      { path: ':id'         , component: ShipsComponent},
      { path: '**'          , redirectTo: 'listado' },
    ]}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class StarRoutingModule { }
