import { Component, OnInit, ElementRef, ViewChild, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector:"tab-clone" ,
    template:"<canvas id='tab-clone'></canvas>" ,
    styles:["#tab-clone{ width: 70%; height: 100px; margin: 0 auto; background-color: #fff; display:" +
    " block; position:absolute; left:-9999px; }"]
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
        this.elem.width = window.screen.width * .7;
        this.elem.height = 100;
        this.context = this.elem.getContext('2d');

        this.context.fillStyle = '#000';

        this.context.font = 'bold 50px serif';

        //this.context.textAlign = 'center';

        this.context.textBaseline = "middle";

        let menu = this.menus;

        let width = this.elem.width / menu.length;

        let mesuText = this.context.measureText.bind(this.context);
        menu.forEach((m ,i) => {
            this.context.fillText( m , i * width , 50 , width );
        });



        this.viewData.emit( this.context.getImageData(0,0,this.elem.width,100) );
    }
}