import { Component, OnInit, Input ,AfterViewInit , Output ,EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiServer } from "../../../server/api.server";

@Component({
    selector : "app-sub-menu" ,
    templateUrl : "sub-menu.component.html" ,
    styleUrls: ["sub-menu.component.css"]
})

export class SubMenuComponent implements OnInit ,AfterViewInit {
    @Input("category") category:string = "1";
    @Output() change:EventEmitter<any> = new EventEmitter();
    public activeIndex:string = "0";
    public menus:Array<any> = [];
    constructor(private api: ApiServer,private active: ActivatedRoute){

    }
    async ngOnInit(){
        await this.getMenus();
    }
    ngAfterViewInit(){

    }
    handle(index){
        let title = "综合";
        if( index != 0 ) {
            title = this.menus.filter(item => item._id == index)[0].title;
        }
        this.change.emit({index , title});
    }
    getList(){

    }
    async getMenus(){
        let data = await this.api.getMenuServe()
        if( data.code == 200 ) {
            this.menus = data.result;
        }
    }
}
