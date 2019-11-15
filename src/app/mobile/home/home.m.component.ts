import { Component, OnInit , AfterViewInit } from "@angular/core";
import Swiper from "swiper";

@Component({
    selector : "app-m-home" ,
    templateUrl : "home.m.component.html" ,
    styleUrls: ["home.m.component.css"]
})

export class HomeMComponent implements OnInit , AfterViewInit{
    public banner:Array<any> = [
        "assets/xiao1.jpg" ,
        "assets/xiao2.jpg" ,
        "assets/xiao3.jpg" ,
    ];
    constructor(){

    }
    ngOnInit(){
        // new Swiper('.swiper-container', {
        //     autoplay: true,
        //     loop: true,
        // });
    }
    ngAfterViewInit(){
        new Swiper('.swiper-container', {
            autoplay: {
                disableOnInteraction: false,
            } ,
            loop: true ,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination'
            }
        });
    }
}