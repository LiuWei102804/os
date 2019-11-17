import { Component, OnInit, Input ,AfterViewInit } from "@angular/core";
import { ApiServer } from "../../../server/api.server";
import Swiper from "swiper";

@Component({
    selector : "app-m-demo" ,
    templateUrl : "demo.m.component.html" ,
    styleUrls: ["demo.m.component.css"]
})

export class DemoMComponent implements OnInit ,AfterViewInit {
    public swiper:Swiper;
    public activeIndex:number = 0;
    public typeId:string = "0";
    public tableData:Array<any> = [];
    public current:number = 0;
    public limit:number = 5;
    constructor(private api: ApiServer){

    }
    ngOnInit(){
        this.getList();
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
    change( id ){
        this.typeId = id;
        console.log( id )
    }
    async getList(){
        let data = await this.api.getArticleListServe([this.current,this.limit,this.typeId] );
        if( data.code == 200 ) {
            this.tableData = data.result.list;
        }
    }
}