import { Component } from "@angular/core";

@Component({
    selector : "app-m-nav" ,
    templateUrl : "nav.m.component.html" ,
    styleUrls : ["nav.m.component.css"]
})

export class NavMComponent {
    public slide:boolean = false;
    public menus:Array<any> = [
        { title : "首页" , url : "/mobile/" , icon : "fa-home"} ,
        { title : "案例" , url : "/mobile/demo" , icon : "fa-tasks" } ,
        { title : "需求"  , url : "/mobile/demand" , icon : "fa-code" } ,
        { title : "小知识" , url : "/mobile/news" , icon : "fa-newspaper-o" } ,
        { title : "PC站"  , url : "/mobile/pc" , icon : "fa-desktop" }
    ];
    constructor(){

    }
    slideMenu( evt ): void{
        let target = evt.target;

        if( target.classList.contains("full-screen") || target.nodeName.toLowerCase() == "i" ) {
            this.slide = !this.slide;
        }
        evt.stopPropagation();
    }
}