import { Component, OnInit, Input ,AfterViewInit } from "@angular/core";
import Swiper from "swiper";

@Component({
    selector : "app-sub-menu" ,
    templateUrl : "sub-menu.component.html" ,
    styleUrls: ["sub-menu.component.css"]
})

export class SubMenuComponent implements OnInit ,AfterViewInit {
    @Input("menus") menus;
    public activeIndex:number = 0;
    constructor(){

    }
    ngOnInit(){

    }
    ngAfterViewInit(){
        const _self = this;
        new Swiper('.swiper-container', {
            slidesPerView: 4.3 ,
            on : {
                tap : function () {
                    _self.activeIndex = this.clickedIndex;
                }
            }
        });

    }
}