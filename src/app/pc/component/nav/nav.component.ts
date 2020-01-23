import {Component, OnInit } from "@angular/core";
import { ApiServer } from "../../../server/api.server";

@Component({
    selector : "app-nav" ,
    templateUrl : "nav.component.html" ,
    styleUrls : ["nav.component.css"]
})

export class NavComponent implements OnInit{
    public qr:boolean = false;
    public menus:Array<any> = [
        // { title : "首页" , url : "/" , icon : "fa-home"} ,
        // { title : "文章" , url : "/text" , icon : "fa-tasks" } ,
        // { title : "图片"  , url : "/emoticon" , icon : "fa-code" } ,
        // { title : "原创" , url : "/custom" , icon : "fa-newspaper-o" } ,
        // { title : "手机站"  , url : "/mobile" , icon : "fa-mobile" }
    ];
    constructor(private api: ApiServer){

    }
    async ngOnInit(){
        const result = await this.api.getMenuServe()
        const arr = []
        result.result.forEach(item => {
            this.initTreeData(item, result.result)
        })
        this.menus.forEach((item, index, thisArr) => {
            if(item.menu_level == '1') {
                item.show = false
                arr.push(item)
            }
        })
        console.log(arr)
        this.menus = arr
    }
    initTreeData(item, list) {
        item.children = []
        for (var i in list) {
            if (list[i].parent_menu_id == item._id) {
                item.show = false
                item.children.push( list[i] )
            }
        }
        if( item.children.length == 0 ) delete item.children
        this.menus.push(item)
    }
    showMenu(m) {
        m.show = true
    }
    hideMenu(m){
        m.show = false
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
