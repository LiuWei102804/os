import {Component, OnInit, Input } from "@angular/core";


@Component({
    selector : "app-news" ,
    templateUrl : "emoticon.component.html" ,
    styleUrls : ["emoticon.component.css"]
})

export class EmoticonComponent implements OnInit {
    @Input("page") page:boolean = true;
    public tableData:Array<any> = [
        {
            type: "动物系列" ,
            img:"assets/haibao1.jpeg",
            time:"2019-11-14 13:45:23"
        } ,
        {
            type: "动物系列" ,
            img:"assets/qiutian.jpg",
            time:"2019-11-14 14:21:20"
        },
        {
            type: "动物系列" ,
            img:"assets/hashiqi.jpg",
            time:"2019-11-14 14:21:20"
        },
        {
            type: "动物系列" ,
            img:"assets/shizi.jpg",
            time:"2019-11-14 14:21:20"
        },
        {
            type: "表情包" ,
            img:"assets/bqb3.jpeg",
            time:"2019-11-14 14:26:38"
        }
    ];
    public search:string = "";
    constructor(){

    }
    ngOnInit(){

    }
}