import {Component, OnInit, Input } from "@angular/core";

@Component({
    selector : "app-demo" ,
    templateUrl : "demo.component.html" ,
    styleUrls : ["demo.component.css"]
})


export class DemoComponent implements OnInit {
    @Input("page") page:boolean = true;
    constructor(){

    }
    ngOnInit(){

    }
}
