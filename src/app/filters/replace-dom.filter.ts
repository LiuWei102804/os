import { Pipe , PipeTransform  } from "@angular/core";

@Pipe({ name : "autoWidth" })
export class AutoWidthPipe implements PipeTransform {
    transform( value: string ){
        let reg = /<img\s/g;

        return value.replace( reg , "<img width='100% '");

    }
}