import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ElModule } from 'element-angular';

import { MobileRoutingModule } from "./mobile.routing.module";

import { MobileComponent } from "./mobile.component";
import { NavMComponent } from "./nav/nav.m.component";
import { HomeMComponent } from "./home/home.m.component";
import { DemoMComponent } from "./demo/demo.m.component";
import { NewsMComponent } from "./news/news.m.component";
import { DemandMComponent } from "./demand/demand.m.component";

@NgModule({
    imports:[
        CommonModule ,
        FormsModule ,
        MobileRoutingModule ,
        ElModule.forRoot()
    ] ,
    providers : [] ,
    declarations : [
        MobileComponent ,
        NavMComponent ,
        HomeMComponent ,
        DemoMComponent ,
        NewsMComponent ,
        DemandMComponent
    ],
    bootstrap:[MobileComponent]
})

export class MobileModule {}