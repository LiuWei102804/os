import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { MobileComponent } from "./mobile.component";
import { HomeMComponent } from "./home/home.m.component";
import { DemoMComponent } from "./demo/demo.m.component";
import { NewsMComponent } from "./news/news.m.component";
import { DemandMComponent } from "./demand/demand.m.component";
import { PcMComponent } from "./pc/pc.m.component";

const routes: Routes = [
    {
        path : "" ,
        component : MobileComponent ,
        children : [
            {
                path : "" ,
                component : HomeMComponent
            } ,
            {
                path : "demo" ,
                component : DemoMComponent
            } ,
            {
                path : "news" ,
                component : NewsMComponent
            } ,
            {
                path : "demand" ,
                component : DemandMComponent
            } ,
            {
                path : "pc" ,
                component : PcMComponent
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild( routes )
    ] ,
    exports :[
        RouterModule
    ]
})

export class MobileRoutingModule {}