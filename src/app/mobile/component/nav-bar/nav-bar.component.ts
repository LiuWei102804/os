import { Component, OnInit, Input ,AfterViewInit } from "@angular/core";
import { Location} from "@angular/common";
import { Router } from "@angular/router";

@Component({
    selector : "app-nav-bar" ,
    templateUrl : "nav-bar.component.html" ,
    styleUrls: ["nav-bar.component.css"]
})

export class NavBarComponent implements OnInit ,AfterViewInit {
    @Input("title") title:string;
    @Input("root") root:boolean;
    constructor(private router: Router,private location: Location){

    }
    ngOnInit(){

    }
    ngAfterViewInit(){

    }
    back( evt ){
        this.location.back();

        evt.stopPropagation();
    }
}