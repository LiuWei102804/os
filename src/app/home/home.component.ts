import { Component , OnInit } from "@angular/core";
import Konva from 'konva';

import { SystemInfo } from "../service/systemInfo.service";


@Component({
    selector:"app-home" ,
    templateUrl:"home.component.html",
    styleUrls:["home.component.css"]
})


export class Home implements OnInit{
    private menuText:Array<any> = [
        { title : "首页" , index : 0 } ,
        { title : "需求" , index : 1 } ,
        { title : "案例", index : 2 } ,
        { title : "关于" , index : 3 }
    ];
    private pageBg:Array<string> = ["#5FB878","#393D49","#1E9FFF","#FF5722"];
    constructor(){

    }
    ngOnInit(){
        var stage = new Konva.Stage({
            container: 'container',
            width: window.innerWidth,
            height: window.innerHeight
        });
        // add canvas element
        var layer = new Konva.Layer();


        for( let i = 0; i < this.menuText.length; i ++ ){
            var group = new Konva.Group({
                x: 0,
                y: 90,
                zIndex:this.menuText.length + 1 - i
            });
            let box = new Konva.Rect({
                x : i* SystemInfo.width ,
                y : 0 ,
                width : SystemInfo.width ,
                height : SystemInfo.height - 40 ,
                fill : this.pageBg[i]
            });
            let contentText = new Konva.Text({
                x : 5 + i * SystemInfo.width ,
                y : 10 ,
                text : `page${i} show` ,
                fontSize : 50 ,
                fill : "#fff"
            });
            group.add( box );
            group.add( contentText );
            let t = new Konva.Text({
                x: SystemInfo.width / 2 - 150,
                y: SystemInfo.height / 2 - 15,
                text: this.menuText[i].title ,
                fontSize: 30,
                fontFamily: "Calibri",
                stroke: "#fff" ,
                width: 300 ,
                padding: 20 ,
                align: "center" ,
                opacity : 0 ,
                index : i ,
                page : group
            });



            layer.add( group );
            layer.add( t );

            let textRun = new Konva.Tween({
                node : t ,
                duration: 1.5 ,
                x : 50 + i * 300 ,
                y: 10 ,
                easing:Konva.Easings.BackEaseOut ,
                opacity: 1 ,
                onFinish : () => {
                    t.on("mouseover", () => this.mousehover( t )  );
                    t.on("mouseout", () => this.mouseleave( t ) );
                }
            });

            textRun.play();
        }

        stage.add( layer );
        layer.draw();

    }
    mousehover( t ){
        //var tl = new TimelineLite();
        let { page , y , index } = t.attrs;t
        let textRun = new Konva.Tween({
            node : t ,
            duration: .5 ,
            y : y - 5 ,
            easing:Konva.Easings.BackEaseOut ,
            fontSize: 40
        });
        page.to({
            x : -index * SystemInfo.width ,
            duration : .8 ,
            easing:Konva.Easings.BackEaseOut ,
            opacity : 1
        });
        textRun.play();

    }
    mouseleave( t ){
        let { page , y , index } = t.attrs;
        let textRun = new Konva.Tween({
            node : t ,
            duration: .5 ,
            y : y + 5 ,
            easing:Konva.Easings.BackEaseOut ,
            fontSize: 30
        });
        if( index != 0 ){
            page.to({
                x : 1 * SystemInfo.width ,
                duration : .5 ,
                easing:Konva.Easings.BackEaseOut ,
                opacity : 0
            });

        }
        textRun.play();
    }
}