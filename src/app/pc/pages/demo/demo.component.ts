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
    constructor(private api: ApiServer){

    }
    ngOnInit(){
        this.getList();
    }
    change( id ){
        this.typeId = id;
    }
    async getList(){
        let data = await this.api.getArticleListServe([this.current,this.limit,this.typeId] );
        if( data.code == 200 ) {
            this.tableData = data.result.list;
        }
    }
}
