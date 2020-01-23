import { Component , ElementRef , OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router , NavigationEnd ,NavigationStart, ActivatedRoute } from "@angular/router";
import { ANIMATIONS } from "./animation";
import { SystemInfo } from "./service/systemInfo.service";
import Konva from "konva";
import { star, moon } from "./konva";
import { SystemServer } from "./server/system.server";
import { Location, PlatformLocation } from "@angular/common";
import { ApiServer } from "./server/api.server";


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
    public treeData = []
    public animateState:string;
    routerState:boolean = true;
    private starNum:number = 400;
    constructor(private el: ElementRef, private router:Router, private active: ActivatedRoute, private pl: PlatformLocation, private api: ApiServer){
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
    async ngOnInit(){
        const result = await this.api.getMenuServe()
        const arr = []
        result.result.forEach(item => {
            this.initTreeData(item, result.result)
        })
        this.treeData.forEach((item, index, thisArr) => {
            if(item.menu_level == '1') {
                arr.push(item)
            }
        })
        this.treeData = arr
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
    initTreeData(item, list) {
        item.children = []
        for (var i in list) {
            if (list[i].parent_menu_id == item._id) {
                item.children.push( list[i] )
            }
        }
        if( item.children.length == 0 ) delete item.children
        this.treeData.push(item)
    }
}
