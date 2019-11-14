import {Component, OnInit } from "@angular/core";

@Component({
    selector : "app-nav" ,
    templateUrl : "nav.component.html" ,
    styleUrls : ["nav.component.css"]
})

export class NavComponent implements OnInit{
    public qr:boolean = false;
    public menus:Array<any> = [
        { title : "逗•大厅" , url : "/" , icon : "fa-home"} ,
        { title : "逗•文学" , url : "/text" , icon : "fa-tasks" } ,
        { title : "逗•图片"  , url : "/demand" , icon : "fa-code" } ,
        { title : "逗•原创" , url : "/news" , icon : "fa-newspaper-o" } ,
        { title : "手机站"  , url : "/mobile" , icon : "fa-mobile" }
    ];
    constructor(){

    }
    ngOnInit(){

    }
    showQr( m ) {
        if( m.url == "/mobile" ) {
            this.qr = true;
        }
    }
    hideQr(){
        this.qr = false;
    }
}