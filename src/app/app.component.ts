import { Component , ElementRef , OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router , NavigationEnd ,NavigationStart, ActivatedRoute } from "@angular/router";
import { ANIMATIONS } from "./animation";
import { SystemInfo } from "./service/systemInfo.service";
import Konva from "konva";
import { star, moon } from "./konva";
import { SystemServer } from "./server/system.server";
import { Location, PlatformLocation } from "@angular/common";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] ,
    animations:[ANIMATIONS]
})
export class AppComponent implements OnInit, AfterViewInit {
    private tabCanvas:HTMLCanvasElement;
    private context = null;
    private balls:Array<any> = [];
    public animateState:string;
    routerState:boolean = true;
    private starNum:number = 400;
    constructor(private el: ElementRef, private router:Router, private active: ActivatedRoute, private pl: PlatformLocation){
        this.router.events.subscribe(event => {
            // if( event instanceof NavigationStart ) {
            //     if( SystemServer.isPhone() && this.pl.location.pathname.indexOf("/mobile") == -1 ) {
            //         console.log( this.router )
            //
            //     }
            // }
            if( event instanceof NavigationEnd ) {
                //this.animateState= "out";
                this.routerState = !this.routerState;
                this.animateState = this.routerState ? 'active' : 'inactive';
            }
        })
    }
    ngAfterViewInit(){

    }
    ngOnInit(){
        let stage = new Konva.Stage({
            container: "container",
            width: window.innerWidth,
            height: window.innerHeight
        });

        let layer = new Konva.Layer();
        for( let i = 0; i < this.starNum; i ++ ) {
            let s = star();
            let radius = s.getAttr("radius");
            let shadowBlur = s.getAttr("shadowBlur");
            layer.add( s );
            // let tween = new Konva.Tween({
            //     node : s ,
            //     easing : Konva.Easings.EaseIn ,
            //     duration : 1 + Math.random() * 2 ,
            //     shadowBlur : shadowBlur - radius >= 10 ? radius : shadowBlur ,
            //     yoyo : true
            // });
            // tween.play();
        }
        layer.add( moon() );

        layer.draw();

        stage.add( layer );


        // this.tabCanvas = this.el.nativeElement.querySelector("#tab-canvas");
        // this.tabCanvas.width = window.screen.width * .6;
        // this.tabCanvas.height = 90;
        // this.context = this.tabCanvas.getContext("2d");
    }
    // viewData( originData ) {
    //     let { width , height , data } = originData;
    //     let skip = 4;
    //     for ( var y = 0; y < height; y += skip ) {
    //         for ( var x = 0; x < width; x += skip ) {
    //             var opacityIndex = ( x + y * width ) * 4 + 3;
    //
    //             if ( data[opacityIndex] > 0 ) {
    //                 this.balls.push(new Ball({
    //                     targetX : x,
    //                     targetY : y,
    //                     radius: 2,
    //                     //radius:10,
    //                     //color:
    //                     // `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})` ,
    //                     color:'#393D49' ,
    //                     birthX: Math.floor( Math.random() * width ) ,
    //                     birthY: Math.floor( Math.random() * height )
    //                 }));
    //             }
    //         }
    //     };
    //
    //     this.update();
    // }
    // update(){
    //     let frameid,isStop;
    //
    //     let move = () => {
    //         this.context.clearRect(0,0, this.tabCanvas.width , this.tabCanvas.height );
    //         for( let b of this.balls ){
    //             b.update(()=>{
    //                 b.draw( this.context );
    //             });
    //         }
    //         isStop = !(this.balls.filter(ball => ball.stop != true).length > 0);
    //         if( isStop ){
    //             cancelAnimationFrame( frameid );
    //         } else {
    //             frameid = requestAnimationFrame( move );
    //         }
    //     }
    //     frameid = requestAnimationFrame( move );
    // }
    // mousePosi( evt ){
    //     let x = evt.clientX - this.tabCanvas.offsetLeft;
    //     let y = evt.clientY - this.tabCanvas.offsetTop;
    //     //this.context.clearRect( 0,0, this.tabCanvas.width, this.tabCanvas.height );
    //
    //     if( this.context.isPointInPath( x , y ) ) {
    //         //console.log(111)
    //     } else {
    //         //console.log(222)
    //     }
    // }
}
