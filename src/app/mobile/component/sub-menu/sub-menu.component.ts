import { Component, OnInit, Input ,AfterViewInit ,OnDestroy, Output ,EventEmitter } from "@angular/core";
import { ApiServer } from "../../../server/api.server";
import Swiper from "swiper";

@Component({
    selector : "app-sub-menu" ,
    templateUrl : "sub-menu.component.html" ,
    styleUrls: ["sub-menu.component.css"]
})

export class SubMenuComponent implements OnInit ,AfterViewInit, OnDestroy {
    @Input("category") category:string = "1";
    @Output() change:EventEmitter<any> = new EventEmitter();
    public swiper:Swiper;
    public activeIndex:number = 0;
    public menus:Array<any> = [];
    constructor(private api: ApiServer){

    }
    ngOnInit(){


    }
    ngAfterViewInit(){
        const _self = this;
        _self.swiper = new Swiper( ".swiper-container", {
            slidesPerView: 4.3 ,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true ,//修改swiper的父元素时，自
            initialSlide: this.activeIndex ,
            on : {
                tap : function () {
                    let id;

                    if( this.clickedIndex == 0 ) {
                        id = "0";
                    } else {
                        id = _self.menus[Math.max(0,this.clickedIndex - 1)]._id;
                    }
                    _self.change.emit( id );
                    _self.activeIndex = this.clickedIndex;

                } ,
                init(){
                    _self.getMenus();
                }
            }
        });
    }
    ngOnDestroy(){

        //this.swiper.destroy(true ,  true );
    }

    getMenus(): void{
        this.api.getMenuServe( [this.category] ).then( res => {
            switch ( res.code ) {
                case 200 :
                    this.menus = res.result;
                    break;
                default :

            }
        },err => {

        })
    }


}