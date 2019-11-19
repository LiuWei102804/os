import { Component , OnInit ,ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiServer} from "../../../server/api.server";
import { ElMessageService } from "element-angular";
import Swiper from "swiper";

@Component({
    selector:"app-home" ,
    templateUrl:"home.component.html",
    styleUrls:["home.component.css","../demo/demo.component.css","../emoticon/emoticon.component.css","../custom/custom.component.css"]
})


export class HomeComponent implements OnInit, AfterViewInit{
    public loading:boolean = false;
    public banner:Array<any> = [];
    public search:string = "";
    public tableData:Array<any> = [];
    public current:number = 0;
    public limit:number = 5;
    public sort = {
        read_number : true
    };
    public newPublish = {
        add_time : true
    };
    public newTableData:Array<any> = [];
    constructor(private router:Router, private api: ApiServer, private message: ElMessageService, private el: ElementRef){

    }
    linkTo(path:string){
        this.router.navigate( [path] );
    }
    submit(){

    }
    ngAfterViewInit(){
        new Swiper('.swiper-container', {
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true ,//修改swiper的父元素时，自
            autoplay: {
                disableOnInteraction: false,
            } ,
            loop: true ,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination'
            }
        });
    }
    async ngOnInit(){
        await this.getBanner();
        await this.getList();
        await this.getNewPublish();
    }
    async getBanner(){
        let data = await this.api.getBannerServe();
        if( data.code == 200 ) {
            this.banner = data.result;
        }
    }
    async getList(){
        let data = await this.api.getArticleListServe( this.sort ,[this.current,this.limit] );
        if( data.code == 200 ) {
            this.tableData = data.result.list;
        }
    }
    async getNewPublish(){
        let data = await this.api.getArticleListServe( this.newPublish ,[this.current,this.limit] );
        if( data.code == 200 ) {
            this.newTableData = data.result.list;
        }
    }

}