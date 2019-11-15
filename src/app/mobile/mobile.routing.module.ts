import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { MobileComponent } from "./mobile.component";
import { HomeMComponent } from "./home/home.m.component";
import { DemoMComponent } from "./demo/demo.m.component";
import { EmoticonComponent } from "./emoticon/emoticon.component";
import { CustomComponent } from "./custom/custom.component";
import { UserComponent } from "./user/user.component";

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
                path : "text" ,
                component : DemoMComponent
            } ,
            {
                path : "emoticon" ,
                component : EmoticonComponent
            } ,
            {
                path : "custom" ,
                component : CustomComponent
            } ,
            {
                path : "user" ,
                component : UserComponent
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