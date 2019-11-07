import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ElModule } from 'element-angular';

import { ApiServer } from "./apis/api.server";

import { Home } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { NewsComponent } from "./news/news.component";
import { DemandComponent } from "./demand/demand.component";
import { AboutComponent } from "./about/about.component";
import { DemoComponent } from "./demo/demo.component";
import { TabClone } from "../TabClone/TabClone";

@NgModule({
  declarations: [
      AppComponent ,
      Home ,
      NavComponent ,
      NewsComponent ,
      DemandComponent ,
      AboutComponent ,
      DemoComponent ,
      TabClone
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule ,
      ElModule.forRoot()
  ],
  providers: [ApiServer],
  bootstrap: [AppComponent]
})
export class AppModule { }
