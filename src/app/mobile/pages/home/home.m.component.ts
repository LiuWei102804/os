import { Component, OnInit , AfterViewInit } from "@angular/core";
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
    public tableData:Array<any> = [];
    public current:number = 0;
    public limit:number = 5;
    public sort = {
        read_number : true
    };
    constructor(private active: ActivatedRoute, private api :ApiServer ){

    }
    async ngOnInit(){
        await this.getBanner();
        await this.getList();
    }
    ngAfterViewInit(){
        new Swiper('.swiper-container', {
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true ,//修改swiper的父元素时，自
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
    async getBanner(){
        let data = await this.api.getBannerServe()
        if( data.code == 200 ) {
            this.banner = data.result;
        }
    }
    async getList(){
        let data = await this.api.getArticleListServe( this.sort ,[this.current,this.limit] );
        if( data.code == 200 ) {
            this.tableData = data.result.list;
        }
    }
}