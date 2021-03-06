import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./server/auth.guard";
import { AuthMGuard } from "./server/auth.m.guard";


const routes: Routes = [
    {
        path : "" ,
        loadChildren : () => import("./pc/pc.module").then(mod => mod.PcModule) ,
        canActivate : [AuthGuard] ,

    } ,
    {
        path : "mobile" ,
        loadChildren : () => import("./mobile/mobile.module").then(mod => mod.MobileModule) ,
        canActivate : [AuthMGuard] ,
    } ,
    { path : "**", redirectTo : "/", pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
