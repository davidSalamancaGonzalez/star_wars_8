import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarRoutingModule } from './star-routing.module';
import { ListComponent } from './pages/list/list.component';
import { ShipsComponent } from './pages/ships/ships.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    ListComponent,
    ShipsComponent,
    HomeComponent,
    ImagenesPipe,
   
  ],
  imports: [
    CommonModule,
    StarRoutingModule,
    InfiniteScrollModule
  ]
})
export class StarModule { }
