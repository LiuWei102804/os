import { Component, OnInit, Input ,AfterViewInit } from "@angular/core";
import Swiper from "swiper";

@Component({
    selector : "app-m-demo" ,
    templateUrl : "demo.m.component.html" ,
    styleUrls: ["demo.m.component.css"]
})

export class DemoMComponent implements OnInit ,AfterViewInit {
    @Input("page") page:boolean = true;
    public swiper:Swiper;
    public activeIndex:number = 0;
    public subMenus:Array<any> = [
        { title : "综合" } ,
        { title : "冷笑话" } ,
        { title : "方言" } ,
        { title : "其他" }
    ];
    constructor(){

    }
    ngOnInit(){

    }
    ngAfterViewInit(){
        const _self = this;
        this.swiper = new Swiper('.swiper-container', {
            slidesPerView: 4.3 ,
            on : {
                tap : function () {
                    _self.activeIndex = this.clickedIndex;
                }
            }
        });

    }
}