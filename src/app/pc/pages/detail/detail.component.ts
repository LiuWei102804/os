import {Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiServer } from "../../../server/api.server";
import {__param} from "tslib";

@Component({
    selector : "app-detail" ,
    templateUrl : "detail.component.html" ,
    styleUrls : ["detail.component.css"]
})


export class DetailComponent implements OnInit {
    public data:any = {};
    constructor(private api:ApiServer,private active: ActivatedRoute){

    }
    ngOnInit(){
        //this.active.queryParams.subscribe( param => console.log( param.id ) );


        this.getById( this.active.snapshot.params.id );
    }
    async getById( id:string ){
        let data = await this.api.getArticleByIdServe( [id] );
        if( data.code == 200 ) {
            this.data = data.result;
        }
    }
}
