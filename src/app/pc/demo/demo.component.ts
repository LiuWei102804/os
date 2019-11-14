import {Component, OnInit, Input } from "@angular/core";

@Component({
    selector : "app-demo" ,
    templateUrl : "demo.component.html" ,
    styleUrls : ["demo.component.css"]
})


export class DemoComponent implements OnInit {
    @Input("page") page:boolean = true;
    public tableData:Array<any> = [
        {
            type: "冷笑话" ,
            content:"小王一辈子窝囊废，行将就木之际就渴望被人夸一次,这份执念感动了老天爷，他派了一个大夫过来说：你这病吧，老厉害了。" ,
            time:"2019-11-14 13:45:23"
        },
        {
            type: "冷笑话" ,
            content:"人生天地间没有谁是容易的，就算是思聪也得每天犯愁怎么花钱。" ,
            time:"2019-11-14 13:54:02"
        },
        {
            type: "冷笑话" ,
            content:"昨晚预约了快递上门取件还预点了早餐，结果早上睡太死外卖打电话没听见，直接给我放门口窗台了，后来快递员来取件把我外卖寄走了" ,
            time:"2019-11-14 13:55:12"
        },
    ];
    public search:string = "";
    constructor(){

    }
    ngOnInit(){

    }
}
