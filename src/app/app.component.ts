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
        // let stage = new Konva.Stage({
        //     container: "container",
        //     width: window.innerWidth,
        //     height: window.innerHeight
        // });

        // let layer = new Konva.Layer();
        // for( let i = 0; i < this.starNum; i ++ ) {
        //     let s = star();
        //     let radius = s.getAttr("radius");
        //     let shadowBlur = s.getAttr("shadowBlur");
        //     layer.add( s );
        // }
        // layer.add( moon() );
        //
        // layer.draw();
        //
        // stage.add( layer );


    }
}
