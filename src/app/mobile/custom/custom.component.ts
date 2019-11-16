import {Component, ElementRef, OnInit, Input } from "@angular/core";
import {ApiServer} from "../../server/api.server";
import { ElMessageService } from "element-angular";


@Component({
    selector : "app-demand" ,
    templateUrl : "custom.component.html" ,
    styleUrls : ["custom.component.css"]
})

export class CustomComponent implements OnInit{
    @Input("page") page:boolean = true;
    public nick_name:string = "";
    public contact:string = "";
    public remarks:string = "";
    public loading:boolean = false;
    constructor(private api: ApiServer, private message: ElMessageService, private el: ElementRef){

    }
    ngOnInit(){

    }

    submit(){

    }
}