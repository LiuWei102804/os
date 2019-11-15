import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
    providedIn : "root"
})
export class ApiServer {
    public static getMenuUrl:string = "/web/menu/getMenus";
    private httpHeaders:HttpHeaders;
    constructor(private http: HttpClient ){
        this.httpHeaders = new HttpHeaders();
        // this.httpHeaders.append("Content-Type","application/json; charset=UTF-8");
        // this.httpHeaders.append("token","123");
    }
    public getMenuServe( params: Array<string> ): Promise<any>{
        let url = ApiServer.getMenuUrl + '/' + params.join("/");

        return this.http.get( url ).toPromise();
    }
}