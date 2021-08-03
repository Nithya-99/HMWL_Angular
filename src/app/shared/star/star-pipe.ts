import {Pipe, PipeTransform} from '@angular/core'  
  
@Pipe({  
    name:'starRating'  
})  
export class starRatingPipe implements PipeTransform {  
  
    transform(value: number):string  
    {  
        if (value < 2 && value >= 1) {  
            return "(Bad)";  
        }  
        else if (value < 3 && value >= 2) {  
            return "(Fair)";  
        } 
        else if (value < 4 && value >= 3) {  
            return "(Good)";  
        } 
        else if (value < 5 && value >= 4) {  
            return "(Very Good)";  
        }
        else if (value === 5) {  
            return "(Excellent)";  
        }   
    }} 