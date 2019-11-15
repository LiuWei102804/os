import { Component, OnInit, Input ,AfterViewInit } from "@angular/core";

@Component({
    selector : "app-search" ,
    templateUrl : "search.component.html" ,
    styleUrls: ["search.component.css"]
})

export class SearchComponent implements OnInit ,AfterViewInit {
    public search:string = "";
    constructor(){

    }
    ngOnInit(){

    }
    ngAfterViewInit(){

    }
}