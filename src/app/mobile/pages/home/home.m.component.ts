import { Component, OnInit , AfterViewInit, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import Swiper from "swiper";
import { ApiServer } from "../../../server/api.server";

@Component({
    selector : "app-m-home" ,
    templateUrl : "home.m.component.html" ,
    styleUrls: ["home.m.component.css"]
})

export class HomeMComponent implements OnInit , AfterViewInit{
    public banner:Array<any> = [];
    public recommendText:Array<any> = [];
    public recommendPic:Array<any> = [];

    public swiper:Swiper;
    public saveImg:String;
    constructor(private active: ActivatedRoute, private api :ApiServer, private el:ElementRef){

    }
    async ngOnInit(){
        let img = new Image();
        img.src = '../../assets/1.jpg';
        img.onload = () => {
            const canvas = this.el.nativeElement.querySelector('#myCanvas');
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img,0,0,canvas.width,canvas.height)
            this.saveImg = canvas.toDataURL('image/jpeg')
        }
        // console.log( )
        // await this.getBanner();
        // await this.getRecommendText();
        // await this.getRecommendPic();


    }
    ngAfterViewInit(){

    }
    async getBanner(){
        let data = await this.api.getBannerServe()
        if( data.code == 200 ) {
            this.banner = data.result;
        }
        let t = setTimeout(() => {
            this.initSwiper();
            clearTimeout( t );
        })
    }
    initSwiper(){
        this.swiper = new Swiper('.swiper-container', {
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
    async getRecommendText(){
        let textData = await this.api.getHomeRecommendServe( [1,1] );
        if( textData.code == 200 ) {
            this.recommendText = textData.result;
        }
    }
    async getRecommendPic(){
        let textData = await this.api.getHomeRecommendServe( [2,2] );
        if( textData.code == 200 ) {
            this.recommendPic = textData.result;
        }
    }

}