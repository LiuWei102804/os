import { Component , OnInit , Input } from "@angular/core";

@Component({
    selector : "app-m-news" ,
    templateUrl : "news.m.component.html" ,
    styleUrls: ["news.m.component.css"]
})

export class NewsMComponent implements OnInit {
    @Input("page") page:boolean = true;
    constructor(){

    }
    ngOnInit(){

    }
}