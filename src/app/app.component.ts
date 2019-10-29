import { Component , ElementRef , OnInit, ViewChild } from '@angular/core';
import { TabClone } from "../TabClone/TabClone";
import { Ball } from "../Ball/Ball";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] ,
    providers:[TabClone]
})
export class AppComponent implements OnInit {
    private tabCanvas:HTMLCanvasElement;
    private context = null;
    private balls:Array<any> = [];
    private need:boolean = true;

    constructor(private el: ElementRef){

    }
    ngOnInit(){
        this.tabCanvas = this.el.nativeElement.querySelector("#tab-canvas");
        this.tabCanvas.width = window.screen.width * .7;
        this.tabCanvas.height = 150;
        this.context = this.tabCanvas.getContext("2d");

        console.log( this.context );
    }
    viewData( originData ) {
        let { width , height , data } = originData;
        let skip = 4;
        for ( var y = 0; y < height; y += skip ) {
            for ( var x = 0; x < width; x += skip ) {
                var opacityIndex = ( x + y * width ) * 4 + 3;
                if ( data[opacityIndex] > 0 ) {
                    this.balls.push(new Ball({
                        targetX : x,
                        targetY : y,
                        radius: 2,
                        //radius:10,
                        //color:
                        // `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})` ,
                        color:'#393D49' ,
                        birthX: Math.floor( Math.random() * width ) ,
                        birthY: Math.floor( Math.random() * height ) ,
                        opacity : Math.random()
                    }));
                }
            }
        };

        this.update();
    }
    update(){
        let frameid,isStop;

        let move = () => {
            this.context.clearRect(0,0, this.tabCanvas.width , this.tabCanvas.height );
            for( let b of this.balls ){
                b.update(()=>{
                    b.draw( this.context );
                });
            }
            isStop = !(this.balls.filter(ball => ball.stop != true).length > 0);
            if( isStop ){
                cancelAnimationFrame( frameid );
                //this.need = false;
            } else {
                frameid = requestAnimationFrame( move );
            }
        }
        frameid = requestAnimationFrame( move );
    }
}
