import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { EditComponent } from "./edit.component";

@Injectable({
    providedIn: 'root'
})
export class EditGuard implements CanDeactivate<EditComponent>{
    
    canDeactivate(component: EditComponent): Observable<boolean>|Promise<boolean> | boolean{
        if(!component.submit){
            return confirm("Are you sure you want to navigate?");
        }
        return true;
    }
}