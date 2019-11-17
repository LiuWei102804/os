import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ElModule } from 'element-angular';

import { MobileRoutingModule } from "./mobile.routing.module";

import { MobileComponent } from "./mobile.component";
import { NavMComponent } from "./component/nav/nav.m.component";
import { HomeMComponent } from "./pages/home/home.m.component";
import { DemoMComponent } from "./pages/demo/demo.m.component";
import { EmoticonComponent } from "./pages/emoticon/emoticon.component";
import { CustomComponent } from "./pages/custom/custom.component";
import { UserComponent } from "./pages/user/user.component";
import { DetailComponent } from "./pages/detail/detail.component";

import { SubMenuComponent } from "./component/sub-menu/sub-menu.component";
import { SearchComponent } from "./component/search/search.component";
import { NotFoundComponent } from "./component/404/not-found.component";
import { NavBarComponent} from "./component/nav-bar/nav-bar.component";

import { AutoWidthPipe } from "../filters/replace-dom.filter";

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
        NavBarComponent ,
        DetailComponent ,

        AutoWidthPipe
    ],
    bootstrap:[MobileComponent]
})

export class MobileModule {}