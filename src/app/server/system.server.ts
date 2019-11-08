import { Injectable } from "@angular/core";

@Injectable()

export class SystemServer {
    constructor(){

    }
    static isPhone(): boolean{
        return (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) != null;
    }
    static windowInfo() :object{
        return window.screen;
    }
    static isAndroid(): boolean{
        return navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Adr") > -1;
    }
    static isIos(): boolean{
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }
    static isIe(): boolean{
        let userAgent = navigator.userAgent;
        return userAgent.match(/msie/) != null || userAgent.match(/trident/) != null;
    }
}