import {Component, OnInit } from "@angular/core";

@Component({
    selector : "app-nav" ,
    templateUrl : "nav.component.html" ,
    styleUrls : ["nav.component.css"]
})

export class NavComponent implements OnInit{
    public menus:Array<any> = [
        { title : "首页" , url : "/" } ,
        { title : "案例" , url : "/demo" } ,
        { title : "需求"  , url : "/demand" } ,
        { title : "小知识" , url : "/news" } 
        //{ title : "关于"  , url : "/about" }
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