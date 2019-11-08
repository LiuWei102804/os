import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";

import { PcComponent } from "./pc.component";
import { DemoComponent } from "./demo/demo.component";
import { DemandComponent } from "./demand/demand.component";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";

const routes: Routes = [
    {
        path : "" ,
        component : PcComponent ,
        children : [
            {
                path : "" ,
                component: HomeComponent
            },
            {
                path : "demo" ,
                component: DemoComponent
            },
            {
                path : "news" ,
                component: NewsComponent
            },
            {
                path : "demand" ,
                component: DemandComponent
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

export class PcRoutingModule {}