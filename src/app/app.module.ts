import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainPageComponent } from './shared/main-page/main-page.component';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FooterComponent,
    HomeComponent
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,

  ],
  exports:[
    FooterComponent,
    MainPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
