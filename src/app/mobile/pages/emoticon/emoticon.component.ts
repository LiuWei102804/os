import {Component, OnInit, Input } from "@angular/core";
import { ApiServer } from "../../../server/api.server";



@Component({
    selector : "app-m-emoticon" ,
    templateUrl : "emoticon.component.html" ,
    styleUrls : ["emoticon.component.css"]
})

export class EmoticonComponent implements OnInit {
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
    change({ index , title } ){
        this.tableData = [];
        this.typeId = index;
        this.title = title;
        this.getList();
    }
    async getList(){
        let data = await this.api.getPicListServe({type_id:this.typeId},[this.current,this.limit] );
        if( data.code == 200 ) {
            this.tableData = data.result.list;
        }
    }
}