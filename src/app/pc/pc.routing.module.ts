import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";

import { PcComponent } from "./pc.component";
import { DemoComponent } from "./demo/demo.component";
import { CustomComponent } from "./custom/custom.component";
import { HomeComponent } from "./home/home.component";
import { EmoticonComponent } from "./emoticon/emoticon.component";
import { UserComponent } from "./user/user.component";


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