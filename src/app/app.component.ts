import { Component , ElementRef , OnInit, ViewChild } from '@angular/core';
import { Router , NavigationEnd } from "@angular/router";
import { ANIMATIONS } from "./animation";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] ,
    animations:[ANIMATIONS]
})
export class AppComponent implements OnInit {
    private tabCanvas:HTMLCanvasElement;
    private context = null;
    private balls:Array<any> = [];
    private animateState:string;
    routerState:boolean = true;

    constructor(private el: ElementRef, private router:Router){
        this.router.events.subscribe(event => {
            if( event instanceof NavigationEnd ) {
                //this.animateState= "out";
                this.routerState = !this.routerState;
                this.animateState = this.routerState ? 'active' : 'inactive';
            }
        })
    }
    ngOnInit(){
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
