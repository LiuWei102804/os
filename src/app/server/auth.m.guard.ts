import { Route , CanLoad , Router , RouterStateSnapshot , ActivatedRouteSnapshot ,UrlSegment , CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { SystemServer } from "./system.server";



@Injectable({
    providedIn : "root"
})
export class AuthMGuard implements CanActivate{
    constructor( private router: Router ){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if( SystemServer.isPhone() ) {
            return true;
        }
        let root = document.documentElement;
        root.style.removeProperty("font-size");

        this.router.navigate(["/"]);
        return false;

    }
}