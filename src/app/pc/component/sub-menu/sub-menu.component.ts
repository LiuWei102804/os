import { Component, OnInit, Input ,AfterViewInit } from "@angular/core";
import { ApiServer } from "../../../server/api.server";

@Component({
    selector : "app-sub-menu" ,
    templateUrl : "sub-menu.component.html" ,
    styleUrls: ["sub-menu.component.css"]
})

export class SubMenuComponent implements OnInit ,AfterViewInit {
    @Input("category") category:string = "1";
    public activeIndex:number = 0;
    public menus:Array<any> = [];
    constructor(private api: ApiServer){

    }
    ngOnInit(){
        this.getMenus();
    }
    ngAfterViewInit(){


    }
    getMenus(): void{
        this.api.getMenuServe( [this.category] ).then( res => {
            switch ( res.code ) {
                case 200 :
                    this.menus = res.result;
                    break;
                default :

            }
        },err => {

        })
    }
}