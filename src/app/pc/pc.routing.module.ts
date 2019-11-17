import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";

import { PcComponent } from "./pc.component";
import { DemoComponent } from "./pages/demo/demo.component";
import { CustomComponent } from "./pages/custom/custom.component";
import { HomeComponent } from "./pages/home/home.component";
import { EmoticonComponent } from "./pages/emoticon/emoticon.component";
import { UserComponent } from "./pages/user/user.component";
import { DetailComponent } from "./pages/detail/detail.component";


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
                path : "text" ,
                component: DemoComponent
            },
            {
                path : "emoticon" ,
                component: EmoticonComponent
            },
            {
                path : "custom" ,
                component: CustomComponent
            },
            {
                path : "user" ,
                component: UserComponent
            },
            {
                path : "detail/:id" ,
                component : DetailComponent
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