import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainPageComponent } from './shared/main-page/main-page.component';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
