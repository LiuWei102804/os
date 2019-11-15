import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ElModule } from 'element-angular';


import { PcRoutingModule } from "./pc.routing.module";
import { PcComponent } from "./pc.component";
import { NavComponent } from "./nav/nav.component";
import { DemoComponent } from "./demo/demo.component";
import { CustomComponent } from "./custom/custom.component";
import { HomeComponent } from "./home/home.component";
import { EmoticonComponent } from "./emoticon/emoticon.component";
import { UserComponent } from "./user/user.component";

import { SubMenuComponent } from "./component/sub-menu/sub-menu.component";
import { SearchComponent } from "./component/search/search.component";
import { NotFoundComponent } from "./component/404/not-found.component";

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
        CustomComponent ,
        HomeComponent ,
        EmoticonComponent ,
        NotFoundComponent ,
        UserComponent ,
        SearchComponent ,
        SubMenuComponent
    ] ,
    bootstrap:[PcComponent]
})

export class PcModule {}