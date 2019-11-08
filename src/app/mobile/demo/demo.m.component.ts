import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector : "app-m-demo" ,
    templateUrl : "demo.m.component.html" ,
    styleUrls: ["demo.m.component.css"]
})

export class DemoMComponent implements OnInit{
    @Input("page") page:boolean = true;
    constructor(){

    }
    ngOnInit(){

    }
}