import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LayoutModule } from '@angular/cdk/layout';
import { ListComponent } from './pages/list/list.component';
import { StarRoutingModule } from './star-routing.module';
import { ShipsComponent } from './pages/ships/ships.component';
import { SharedModule } from '../shared/shared.module';
import { PilotsComponent } from './pages/ships/pilots/pilots.component';
import { MoviesComponent } from './pages/ships/movies/movies.component';
import { MoviePipe } from './pipes/movie.pipe';
import { PilotPipe } from './pipes/pilots.pipe';






@NgModule({
  declarations: [
    ListComponent,
    ShipsComponent,
    HomeComponent,
    PilotsComponent,
    MoviesComponent,
    MoviePipe,
    ImagenesPipe,
    PilotPipe
    
  
  ],
  imports: [
    CommonModule,
    StarRoutingModule,
    InfiniteScrollModule,
    LayoutModule,
    SharedModule
    
    
    
  ]
})
export class StarModule { }
