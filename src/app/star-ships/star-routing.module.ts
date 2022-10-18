import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { ShipsComponent } from './pages/ships/ships.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  
  { path: '',
    component: HomeComponent,
    children: [
      { path: 'listado' , component: ListComponent},
      { path: ':id'     , component: ShipsComponent},
      { path: '**'      , redirectTo: 'listado' },
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
