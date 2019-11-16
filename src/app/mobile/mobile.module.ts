import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ElModule } from 'element-angular';

import { MobileRoutingModule } from "./mobile.routing.module";

import { MobileComponent } from "./mobile.component";
import { NavMComponent } from "./nav/nav.m.component";
import { HomeMComponent } from "./home/home.m.component";
import { DemoMComponent } from "./demo/demo.m.component";
import { EmoticonComponent } from "./emoticon/emoticon.component";
import { CustomComponent } from "./custom/custom.component";
import { UserComponent } from "./user/user.component";

import { SubMenuComponent } from "./component/sub-menu/sub-menu.component";
import { SearchComponent } from "./component/search/search.component";
import { NotFoundComponent } from "./component/404/not-found.component";
import { NavBarComponent} from "./component/nav-bar/nav-bar.component";

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
        EmoticonComponent ,
        CustomComponent ,
        SubMenuComponent ,
        SearchComponent ,
        NotFoundComponent ,
        UserComponent ,
        NavBarComponent
    ],
    bootstrap:[MobileComponent]
})

export class MobileModule {}