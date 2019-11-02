import {Component, OnInit } from "@angular/core";

@Component({
    selector : "app-nav" ,
    templateUrl : "nav.component.html" ,
    styleUrls : ["nav.component.css"]
})

export class NavComponent implements OnInit{
    public menus:Array<any> = [
        { title : "首页" , active : true , url : "/" } ,
        { title : "需求"  , active : false, url : "/demand" } ,
        { title : "小知识" , active : false , url : "/news" } ,
        { title : "关于"  , active : false , url : "/about" }
    ];
    constructor(){

    }
    ngOnInit(){

    }
    navPage( page ){
        this.menus.forEach(p => p.active = false );
        page.active = true;
    }
}