import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
    providedIn : "root"
})
export class ApiServer {
    public subscribeUrl:string = "/register/submit";
    private httpHeaders:HttpHeaders;
    constructor(private http: HttpClient ){
        this.httpHeaders = new HttpHeaders();
        // this.httpHeaders.append("Content-Type","application/json; charset=UTF-8");
        // this.httpHeaders.append("token","123");
    }
    subscribe( data: object ): Promise<any> {
        return this.http.post( this.subscribeUrl , data ).toPromise();
    }
}