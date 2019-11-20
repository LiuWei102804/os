import {Component, OnInit, Input } from "@angular/core";
import { ApiServer } from "../../../server/api.server";

@Component({
    selector : "app-demo" ,
    templateUrl : "demo.component.html" ,
    styleUrls : ["demo.component.css"]
})


export class DemoComponent implements OnInit {
    public typeId:string = "0";
    public tableData:Array<any> = [];
    public current:number = 0;
    public limit:number = 5;
    public title:string = "综合";
    constructor(private api: ApiServer){

    }
    ngOnInit(){
        this.getList();
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
