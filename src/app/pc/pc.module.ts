import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ElModule } from 'element-angular';


import { PcRoutingModule } from "./pc.routing.module";
import { PcComponent } from "./pc.component";
import { NavComponent } from "./nav/nav.component";
import { DemoComponent } from "./demo/demo.component";
import { DemandComponent } from "./demand/demand.component";
import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";

@NgModule({
    imports:[
        PcRoutingModule ,
        CommonModule ,
        FormsModule ,
        ElModule.forRoot()
    ] ,
    providers : [] ,
    declarations : [
        PcComponent ,
        NavComponent ,
        DemoComponent ,
        DemandComponent ,
        HomeComponent ,
        NewsComponent
    ] ,
    bootstrap:[PcComponent]
})

export class PcModule {}