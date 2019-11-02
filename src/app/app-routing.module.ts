import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { DemandComponent } from "./demand/demand.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    { path : "" , component : Home } ,
    { path : "news" , component : NewsComponent  } ,
    { path : "demand" , component : DemandComponent  } ,
    { path : "about" , component : AboutComponent  } ,
    { path : "**", redirectTo : "/", pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
