import {Pipe, PipeTransform} from '@angular/core'  
  
@Pipe({  
    name:'productCode'  
})  
export class productCodePipe implements PipeTransform {  
  
    transform(value: string):string  
    {  
        let [str,code] = value.split(" ");
        return  str.toUpperCase() + "-" + code;
    }} 