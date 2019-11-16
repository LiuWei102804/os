import { Component , ElementRef , OnInit } from "@angular/core";
import { NavMComponent } from "./nav/nav.m.component";
import {ActivatedRoute, Router, Route, NavigationEnd, NavigationStart } from "@angular/router";
import {map} from 'rxjs/operators';


(function () {
   let root = document.documentElement;
   let rect = root.getBoundingClientRect();
   root.style.setProperty("font-size" , rect.width / 10 + "px");
})()

@Component({
    selector : "app-mobile" ,
    templateUrl : "mobile.component.html" ,
    styleUrls : ["mobile.component.css"] ,
    providers:[NavMComponent]
})

export class MobileComponent implements OnInit{
    public title:string = "";
    public root:boolean = false;
    constructor(private nav: NavMComponent, private el:ElementRef,private active: ActivatedRoute,private router: Router){
        this.router.events.subscribe(event => {
            if( event instanceof NavigationEnd ) {
                //this.active.data.subscribe(res => console.log(res));
                //this.animateState= "out";
                this.active.children[0].data.subscribe(res => {
                    this.title = res.title;
                    this.root = res.root;
                });
            }
        })
    }
    ngOnInit(){
        //console.log( this.active.children[0].data.subscribe(res => console.log(res)) )
       // this.active.data.pipe(map(p => console.log( p )));
        //this.router.route.params.subscribe();
        this.el.nativeElement.querySelector(".root").addEventListener("touchend" , () => this.nav.slideIn() );
    }
}