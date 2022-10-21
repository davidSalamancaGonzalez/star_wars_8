import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LayoutModule } from '@angular/cdk/layout';
import { ListComponent } from './pages/list/list.component';
import { StarRoutingModule } from './star-routing.module';
import { ShipsComponent } from './pages/ships/ships.component';






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
    InfiniteScrollModule,
    LayoutModule,
    
    
  ]
})
export class StarModule { }
