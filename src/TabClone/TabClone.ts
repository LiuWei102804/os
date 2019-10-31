import { Component, OnInit, ElementRef, ViewChild, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector:"tab-clone" ,
    template:"<canvas id='tab-clone' (mousemove)='move($event)'></canvas>" ,
    styles:["#tab-clone{ width: 70%; height: 100px; margin: 0 auto; background-color: #fff; display:" +
    " block; position:absolute; left:15%; top:0; background:rgba(0,0,0,0);}"]
})


export class TabClone implements OnInit{
    @Input() menus:Array<string>;
    @Output() viewData = new EventEmitter<Array<any>>();
    private elem:HTMLCanvasElement;
    private context:any;

    constructor(private el:ElementRef){

    }
    ngOnInit(){
        this.elem = this.el.nativeElement.querySelector("#tab-clone");
        this.elem.width = window.screen.width * .6;
        this.elem.height = 90;
        this.context = this.elem.getContext('2d');


        this.context.beginPath();
        this.context.font = 'normal 30px 宋体';

        //this.context.textAlign = 'center';

        this.context.textBaseline = "middle";


        this.draw();

        //this.context.closePath();
        //this.viewData.emit( this.context.getImageData(0,0,this.elem.width,100) );
    }
    draw(){
        let menu = this.menus;
        let width = this.elem.width / menu.length;
        let measureText = this.context.measureText.bind(this.context);

        menu.forEach((m ,i) => {
            this.context.save();
            this.context.fillStyle = 'rgba(0,0,0,0.2)';
            this.context.rect( i * width , 35 , measureText( menu[i] ).width , 30 );
            this.context.fill();
            this.context.restore();
            this.context.strokeText( m , i * width , 50 , width );
        });
    }
    move( evt ){
        let x = evt.clientX - this.elem.offsetLeft;
        let y = evt.clientY - this.elem.offsetTop;

        this.context.clearRect( 0 , 0, this.elem.width, this.elem.height );

        this.draw();
        if( this.context.isPointInPath( x , y ) ) {
            console.log('在文本区')
            //let index = this.findIndex( x );
            // console.log( index );
            // this.context.save();
            // this.context.fillStyle = '#2F4056';
            // this.context.fillText( this.menus[index] , index * width , 50  );
            // this.context.restore();
        }





    }
    findIndex( x ){
        let width = this.elem.width / this.menus.length;
        let index = Math.floor( x / width );
        let textWidth = this.context.measureText( this.menus[index] ).width;
        let h = 30;
        if( x < index * width + textWidth && x > index * width ) {
            console.log('在文本区')
        }

        //return Math.floor( x / width );
    }
}