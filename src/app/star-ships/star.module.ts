import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarRoutingModule } from './star-routing.module';
import { ListComponent } from './pages/list/list.component';
import { ShipsComponent } from './pages/ships/ships.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './pages/home/footer/footer.component';




@NgModule({
  declarations: [
    ListComponent,
    ShipsComponent,
    HomeComponent,
    ImagenesPipe,
    FooterComponent,
   
    
    
  ],
  imports: [
    CommonModule,
    StarRoutingModule,
    InfiniteScrollModule,
    LayoutModule,
    
  ]
})
export class StarModule { }
