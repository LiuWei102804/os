import { Component ,ElementRef , OnInit ,AfterViewInit } from "@angular/core";

@Component({
    selector : "app-m-nav" ,
    templateUrl : "nav.m.component.html" ,
    styleUrls : ["nav.m.component.css"]
})

export class NavMComponent implements OnInit ,AfterViewInit {
    public slide:boolean = false;
    public menus:Array<any> = [
        { title : "逗•大厅" , url : "/mobile/" , icon : "fa-home"} ,
        { title : "逗•文学" , url : "/mobile/text" , icon : "fa-tasks" } ,
        { title : "逗•图片"  , url : "/mobile/emoticon" , icon : "fa-code" } ,
        { title : "逗•原创" , url : "/mobile/custom" , icon : "fa-newspaper-o" }
        // { title : "PC站"  , url : "/mobile/pc" , icon : "fa-desktop" },
    ];
    constructor(private el: ElementRef){

    }
    ngOnInit(){
    }
    ngAfterViewInit(){

    }
    slideMenu( $event ): boolean{
        this.slide = !this.slide;
        $event.stopPropagation();
        return false;
    }
    slideIn(){
        console.log( this )
        this.slide = false;

    }

}