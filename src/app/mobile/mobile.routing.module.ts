import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { MobileComponent } from "./mobile.component";
import { HomeMComponent } from "./pages/home/home.m.component";
import { DemoMComponent } from "./pages/demo/demo.m.component";
import { EmoticonComponent } from "./pages/emoticon/emoticon.component";
import { CustomComponent } from "./pages/custom/custom.component";
import { UserComponent } from "./pages/user/user.component";

const routes: Routes = [
    {
        path : "" ,
        component : MobileComponent ,
        data : { a : 1} ,
        children : [
            {
                path : "" ,
                component : HomeMComponent ,
                data : {
                    title : "首页" ,
                    root : true
                }
            } ,
            {
                path : "text" ,
                component : DemoMComponent ,
                data : {
                    title : "文章" ,
                    root : false
                }
            } ,
            {
                path : "emoticon" ,
                component : EmoticonComponent,
                data : {
                    title : "图片" ,
                    root : false
                }
            } ,
            {
                path : "custom" ,
                component : CustomComponent ,
                data : {
                    title : "原创" ,
                    root : false
                }
            } ,
            {
                path : "user" ,
                component : UserComponent ,
                data : {
                    title : "用户" ,
                    root : false
                }
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