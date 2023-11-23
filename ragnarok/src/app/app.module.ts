import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base-layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AsyncPipe, NgFor, NgIf],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
