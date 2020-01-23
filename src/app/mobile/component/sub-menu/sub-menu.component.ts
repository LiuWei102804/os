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
    async ngOnInit(){
        await this.getMenus();
    }
    ngAfterViewInit(){

    }
    ngOnDestroy(){

        //this.swiper.destroy(true ,  true );
    }
    initSwiper(){
        const _self = this;
        this.swiper = new Swiper( ".swiper-container", {
            slidesPerView: 4.3 ,
            initialSlide: this.activeIndex ,
            on : {
                tap : function () {
                    let index,title;

                    if( this.clickedIndex == 0 ) {
                        index = "0";
                        title = "综合";
                    } else {
                        index = _self.menus[Math.max(0,this.clickedIndex - 1)]._id;
                        title = _self.menus.filter(item => item._id == index)[0].title;
                    }
                    _self.change.emit({ index , title });
                    _self.activeIndex = this.clickedIndex;
                }
            }
        });
    }

    async getMenus() {
        let data = await this.api.getMenuServe();
        if( data.code == 200 ) {
            this.menus = data.result;
        }
        let t = setTimeout(() => {
            this.initSwiper();
            clearTimeout( t );
        })
    }


}
