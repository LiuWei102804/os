import { Component } from "@angular/core";

(function () {
   let root = document.documentElement;
   let rect = root.getBoundingClientRect();
   root.style.setProperty("font-size" , rect.width / 10 + "px");
})()

@Component({
    selector : "app-mobile" ,
    templateUrl : "mobile.component.html" ,
    styleUrls : ["mobile.component.css"]
})

export class MobileComponent{
    constructor(){

    }
}