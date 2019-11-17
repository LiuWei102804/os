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
    public data:any = {
        content :""
    };
    constructor(private api:ApiServer,private active: ActivatedRoute){

    }
    ngOnInit(){
        //this.active.queryParams.subscribe( param => console.log( param.id ) );


        //console.log( this.active.snapshot.params.id )
        this.getById( this.active.snapshot.params.id );
    }
    async getById( id:string ){
        let data = await this.api.getArticleByIdServe( [id] );
        if( data.code == 200 ) {
            data.result.content = data.result.content.replace(/<img\s/g,"<img width='100%' ");
            this.data = data.result;
        }
    }
}
