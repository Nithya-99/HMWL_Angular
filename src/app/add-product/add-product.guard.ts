import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";

import { AddProductComponent } from "./add-product.component";
@Injectable({
    providedIn: 'root'
})
export class AddProductGuard implements CanDeactivate<AddProductComponent>{
    
    canDeactivate(component: AddProductComponent): Observable<boolean>|Promise<boolean> | boolean{
        if(!component.submit){
            return confirm("Are you sure you want to navigate?");
        }
        return true;
    }
}