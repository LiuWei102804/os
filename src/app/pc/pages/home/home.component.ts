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
    private starNum:number = 400;

    public nick_name:string = "";
    public contact:string = "";
    public remarks:string = "";
    public loading:boolean = false;
    public banner:Array<any> = [
        "assets/xiao1.jpg" ,
        "assets/xiao2.jpg" ,
        "assets/xiao3.jpg" ,
    ];
    public search:string = "";
    public hots:Array<any> = [
        {
            text : "某人到商店买点钞机，挑了两台最贵的，同时问了一下老板为什么这种型号的贵一些，老板告诉他因为这是全智能语音型的。付款时他让老板就用这两台点钞机点钞，两台点钞机都报出了准确的数字，他认为语音功能还不错，但没看出什么智能来，老板说你以后用就知道了，他付完款后把点钞机放到车后座，开车回公司。",
            time : "2019-11-14 11:13:45" ,
            good : 356
        },
        {
            text : "小明和老婆去超市购物，看见卖烤鸡的柜台有人排队。老婆：“有人排队肯定还可以，买一只尝尝吧。”小明：“现在人多，过一会儿再来，可能就不用排队了说不定还能抢个板凳或者沙发呢。”老婆一想也有点道理，两人就先去买其它的。采购基本结束，老婆找个地方坐下来先休息一会，叫小明去看看烤鸡那边还有多少人排队。不一会儿，老婆听见小明喊她：“快过来，我抢到沙发了！ ”老婆过去一看就怒了：“晕哦，分页沙发啊！ ”",
            time : "2019-11-14 11:29:36" ,
            good : 342
        }
    ];
    public cold:Array<any> = [
        {
            text : "火云邪神苦练多年，终于将蛤蟆功练至顶级并成功产下8个小蝌蚪。",
            time : "2019-11-14 12:03:15" ,
            good : 332
        },
        {
            text : "老婆永远是对的，这话永远也是对的。但老婆没想到的是，她不一定永远是老婆",
            time : "2019-11-14 11:59:31" ,
            good : 187
        }
    ];
    constructor(private router:Router, private api: ApiServer, private message: ElMessageService, private el: ElementRef){

    }
    linkTo(path:string){
        this.router.navigate( [path] );
    }
    submit(){

    }
    ngAfterViewInit(){
        new Swiper('.swiper-container', {
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
    ngOnInit(){



        // let BannerNews = {
        //     title : "NEWS" ,
        //     x : 60 ,
        //     y : 130 ,
        //     data : {
        //         list : [
        //             { text : "写在民营企业座谈会召开一周年之际"} ,
        //             { text : "桌布论坛 让高中生和科学家零距离"} ,
        //             { text : "市场下沉，消费增添新活力"}
        //         ]
        //     }
        // };
        // let newsModule = NewsRect( BannerNews );
        //
        // for( let i = 0; i < this.menuText.length; i ++ ){
        //     var groupPage = new Konva.Group({
        //         x: 0,
        //         y: 90
        //     });
        //     let box = new Konva.Rect({
        //         x : i* SystemInfo.width ,
        //         y : 0 ,
        //         width : SystemInfo.width ,
        //         height : SystemInfo.height - 40
        //         //fill : this.pageBg[i]
        //     });
        //     // let contentText = new Konva.Text({
        //     //     x : 5 + i * SystemInfo.width ,
        //     //     y : 10 ,
        //     //     text : `page${i} show` ,
        //     //     fontSize : 50 ,
        //     //     fill : "#fff"
        //     // });
        //     groupPage.add( box );
        //     let t = new Konva.Text({
        //         x: SystemInfo.width / 2 - 150,
        //         y: SystemInfo.height / 2 - 15,
        //         text: this.menuText[i].title ,
        //         fontSize: 30,
        //         fontFamily: "Calibri",
        //         stroke: "#fff" ,
        //         width: 200 ,
        //         padding: 20 ,
        //         align: "center" ,
        //         opacity : 0 ,
        //         index : i ,
        //         page : groupPage
        //     });
        //     let subTitle = new Konva.Text({
        //         x :  i * 200,
        //         y : 70 ,
        //         text: this.menuText[i].subTitle ,
        //         align : "center" ,
        //         fontSize : 18 ,
        //         width : 200 ,
        //         fill : "#fff" ,
        //         opacity : 0
        //     });
        //
        //     layer.add( subTitle ).add( groupPage ).add( t );
        //
        //     let textRun = new Konva.Tween({
        //         node : t ,
        //         duration: 1.5 ,
        //         x : i * 200 ,
        //         y: 10 ,
        //         easing:Konva.Easings.BackEaseOut ,
        //         opacity: 1 ,
        //         onFinish : () => {
        //             subTitle.to({
        //                 opacity : 1 ,
        //                 duration : .5
        //             });
        //             t.on("mouseover", () => this.mousehover( t )  );
        //             t.on("mouseout", () => this.mouseleave( t ) );
        //         }
        //     });
        //     textRun.play();
        // };
        //
        //
        //
        // layer.add( newsModule );


    }
    mousehover( t ){
        //var tl = new TimelineLite();
        // let { page , y , index } = t.attrs;
        // let textRun = new Konva.Tween({
        //     node : t ,
        //     duration: .5 ,
        //     y : y - 5 ,
        //     easing:Konva.Easings.BackEaseOut ,
        //     fontSize: 40
        // });
        // page.to({
        //     x : -index * SystemInfo.width ,
        //     duration : .8 ,
        //     easing:Konva.Easings.BackEaseOut ,
        //     opacity : 1
        // });
        // textRun.play();

    }
    mouseleave( t ){
        // let { page , y , index } = t.attrs;
        // let textRun = new Konva.Tween({
        //     node : t ,
        //     duration: .5 ,
        //     y : y + 5 ,
        //     easing:Konva.Easings.BackEaseOut ,
        //     fontSize: 30
        // });
        // if( index != 0 ){
        //     page.to({
        //         x : 1 * SystemInfo.width ,
        //         duration : 1 ,
        //         easing:Konva.Easings.BackEaseOut ,
        //         opacity : 0
        //     });
        //
        // }
        // textRun.play();
    }
}