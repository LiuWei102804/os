import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
    providedIn : "root"
})
export class ApiServer {
    public static getMenuUrl:string = "/web/menu/getMenus";
    public static getArticleByIdUrl:string = "/web/article/getById";
    public static getArticleListUrl:string = "/web/article/getArticleList";

    public static getBannerUrl:string = "/web/banner/getBanner";



    private httpHeaders:HttpHeaders;
    constructor(private http: HttpClient){
        //this.httpHeaders = new HttpHeaders();

    }
    public getMenuServe( params: Array<any> ): Promise<any>{
        let url = ApiServer.getMenuUrl + '/' + params.join("/");

        return this.http.get( url ).toPromise();
    }

    public getArticleByIdServe( params: Array<any> ): Promise<any>{
        let url = ApiServer.getArticleByIdUrl + '/' + params.join("/");

        return this.http.get( url ).toPromise();
    }

    public getArticleListServe( options = {} , params: Array<any> ): Promise<any>{
        let url = ApiServer.getArticleListUrl + '/' + params.join("/");

        return this.http.post( url , options ).toPromise();
    }

    public getBannerServe( ): Promise<any>{
        let url = ApiServer.getBannerUrl;

        return this.http.get( url ).toPromise();
    }
}