import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ElModule } from 'element-angular';

import { NavComponent } from "./template/nav/nav.component";
import { Home } from "./home/home.component";
import {TabClone} from "../TabClone/TabClone";

@NgModule({
  declarations: [
      AppComponent ,
      NavComponent ,
      Home ,
      TabClone
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
