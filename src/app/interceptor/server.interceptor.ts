import { Injectable } from "@angular/core";
import { HttpInterceptor , HttpHandler , HttpRequest , HttpHeaderResponse, HttpResponse , HttpEvent , HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Rx";


@Injectable()
export class ServerInterceptor implements HttpInterceptor{
    constructor(){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let clone = request.clone({
            url : request.url + `?_=` + +new Date() ,
            setHeaders:{
                "Content-Type":"application/json; charset=UTF-8",
                "if-modfied-since":"0"
            }
        });

        return next.handle( clone );
    }
}