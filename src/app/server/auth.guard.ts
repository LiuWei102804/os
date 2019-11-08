import { Route , CanLoad , Router , RouterStateSnapshot , ActivatedRouteSnapshot ,UrlSegment , CanActivate } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { SystemServer } from "./system.server";



@Injectable({
    providedIn : "root"
})
export class AuthGuard implements CanActivate{
    constructor( private router: Router ){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if( !(SystemServer.isPhone()) ) {
            return true;
        }
        this.router.navigate(["/mobile"]);
        return false;

    }
}