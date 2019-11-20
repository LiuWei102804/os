import {OnInit,Component , Input } from "@angular/core";


@Component({
    selector : "app-empty" ,
    templateUrl : "./empty.component.html" ,
    styleUrls : ["./empty.component.css"]
})

export class EmptyComponent implements OnInit {
    @Input("msg") msg:string = "运营很懒，啥都没维护！";
    constructor(){

    }
    ngOnInit(){

    }
}