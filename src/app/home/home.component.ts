import { Component , OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector:"app-home" ,
    templateUrl:"home.component.html",
    styleUrls:["home.component.css","../demo/demo.component.css","../news/news.component.css","../demand/demand.component.css"]
})


export class Home implements OnInit{
    private menuText:Array<any> = [
        { title : "首页" , index : 0, subTitle : "home" } ,
        { title : "需求" , index : 1, subTitle : "demand" } ,
        { title : "案例" , index : 2, subTitle : "case" } ,
        { title : "关于" , index : 3, subTitle : "about" }
    ];
    private pageBg:Array<string> = ["#5FB878","#393D49","#1E9FFF","#FF5722"];
    private starNum:number = 400;
    constructor(private router:Router){

    }
    linkTo(path:string){
        this.router.navigate( [path] );
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