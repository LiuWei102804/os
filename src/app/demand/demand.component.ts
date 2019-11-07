import {Component, ElementRef, OnInit } from "@angular/core";
import {ApiServer} from "../apis/api.server";
import { ElMessageService } from "element-angular";


@Component({
    selector : "app-demand" ,
    templateUrl : "demand.component.html" ,
    styleUrls : ["demand.component.css"]
})

export class DemandComponent implements OnInit{
    public nick_name:string = "";
    public contact:string = "";
    public remarks:string = "";
    public loading:boolean = false;
    constructor(private api: ApiServer, private message: ElMessageService, private el: ElementRef){

    }
    ngOnInit(){

    }
    submit(){
        this.loading = true;
        let data = {
            nick_name : this.nick_name ,
            contact : this.contact ,
            remarks : this.remarks
        };
        this.api.subscribe( data ).then(res => {
            this.loading = false;
            switch ( res.code ) {
                case 200 :
                    this.message.success("提交成功");
                    break;
                default :
                    this.message.error( res.msg );
                    this.el.nativeElement.querySelector("#contact").focus();
            }
        }, err => {
            this.loading = false;
        })
    }
}