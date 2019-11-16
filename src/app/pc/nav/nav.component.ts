import {Component, OnInit } from "@angular/core";

@Component({
    selector : "app-nav" ,
    templateUrl : "nav.component.html" ,
    styleUrls : ["nav.component.css"]
})

export class NavComponent implements OnInit{
    public qr:boolean = false;
    public menus:Array<any> = [
        { title : "首页" , url : "/" , icon : "fa-home"} ,
        { title : "文章" , url : "/text" , icon : "fa-tasks" } ,
        { title : "图片"  , url : "/emoticon" , icon : "fa-code" } ,
        { title : "原创" , url : "/custom" , icon : "fa-newspaper-o" } ,
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