import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from "./home/home.component";

const routes: Routes = [
    { path : "" , component : Home  } ,
    { path : "*", redirectTo : "", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
