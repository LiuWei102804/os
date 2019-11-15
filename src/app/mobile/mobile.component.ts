import { Component , ElementRef , OnInit } from "@angular/core";
import { NavMComponent } from "./nav/nav.m.component";

(function () {
   let root = document.documentElement;
   let rect = root.getBoundingClientRect();
   root.style.setProperty("font-size" , rect.width / 10 + "px");
})()

@Component({
    selector : "app-mobile" ,
    templateUrl : "mobile.component.html" ,
    styleUrls : ["mobile.component.css"] ,
    providers:[NavMComponent]
})

export class MobileComponent implements OnInit{

    constructor(private nav: NavMComponent, private el:ElementRef){

    }
    ngOnInit(){
        this.el.nativeElement.querySelector(".root").addEventListener("touchend" , () => this.nav.slideIn() );
    }
}