import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';


import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { HomeComponent } from './home/home/home.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    SharedModule

  ],
  exports:[
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
