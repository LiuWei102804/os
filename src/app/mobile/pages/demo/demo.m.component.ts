import { Component, OnInit, Input ,AfterViewInit } from "@angular/core";
import { ApiServer } from "../../../server/api.server";
import Swiper from "swiper";

@Component({
    selector : "app-m-demo" ,
    templateUrl : "demo.m.component.html" ,
    styleUrls: ["demo.m.component.css"]
})

export class DemoMComponent implements OnInit ,AfterViewInit {
    public search:string = "";
    public activeIndex:number = 0;
    public typeId:string = "0";
    public tableData:Array<any> = [];
    public current:number = 0;
    public limit:number = 5;
    public title:string = "综合";
    constructor(private api: ApiServer){

    }
    async ngOnInit(){
        await this.getList();
    }
    ngAfterViewInit(){

    }
    change({ index , title } ){
        this.tableData = [];
        this.typeId = index;
        this.title = title;
        this.getList();
    }
    async getList(){
        let data = await this.api.getArticleListServe({type_id:this.typeId},[this.current,this.limit] );
        if( data.code == 200 ) {
            this.tableData = data.result.list;
        }
    }
}