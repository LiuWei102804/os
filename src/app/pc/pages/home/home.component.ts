import { Component , OnInit ,ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiServer} from "../../../server/api.server";
import { ElMessageService } from "element-angular";
import Swiper from "swiper";

@Component({
    selector:"app-home" ,
    templateUrl:"home.component.html",
    styleUrls:["home.component.css","../demo/demo.component.css","../emoticon/emoticon.component.css","../custom/custom.component.css"]
})


export class HomeComponent implements OnInit, AfterViewInit{
    public loading:boolean = false;
    public banner:Array<any> = [];
    public search:string = "";

    public recommendText:Array<any> = [];
    public recommendPic:Array<any> = [];

    public swiper:Swiper;
    constructor(private router:Router, private api: ApiServer, private message: ElMessageService, private el: ElementRef){

    }
    linkTo(path:string){
        this.router.navigate( [path] );
    }
    submit(){

    }
    ngAfterViewInit(){

    }
    async ngOnInit(){
        await this.getBanner();
        await this.getRecommendText();
        await this.getRecommendPic();
    }
    async getBanner(){
        let data = await this.api.getBannerServe();
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
        let textData = await this.api.getHomeRecommendServe( [2,1] );
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