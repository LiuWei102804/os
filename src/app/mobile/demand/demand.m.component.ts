import { Component, OnInit, Input } from "@angular/core";
import { ElMessageService } from "element-angular";
import { ApiServer } from "../../server/api.server";

@Component({
    selector : "app-m-demand" ,
    templateUrl : "demand.m.component.html" ,
    styleUrls: ["demand.m.component.css"]
})

export class DemandMComponent implements OnInit{
    @Input("page") page:boolean = true;
    public nick_name:string = "";
    public contact:string = "";
    public remarks:string = "";
    public loading:boolean = false;
    constructor(private api: ApiServer, private message: ElMessageService){

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
            }
        }, err => {
            this.loading = false;
        })
    }
}