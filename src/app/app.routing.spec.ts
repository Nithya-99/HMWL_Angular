import { TestBed, ComponentFixture, fakeAsync, tick, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, ActivatedRoute, convertToParamMap, RouterLink, RouterLinkActive } from '@angular/router';
import { DebugElement } from "@angular/core";
import { Location } from "@angular/common";
import { By } from '@angular/platform-browser';
import { Observable, of, Subject } from "rxjs";

import { routes } from './app-routing.module'

import { AddProductComponent } from './add-product/add-product.component';
import { AddProductGuard } from './add-product/add-product.guard';
import { EditComponent } from './edit/edit.component';
import { EditGuard } from './edit/edit.guard';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { AppComponent } from "./app.component";
import { ProductService } from "./product/product.service";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeaderComponent } from "./header/header.component";

describe('Routing testing', () => {
    let router: Router;
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let debugElement: DebugElement;
    let location: Location;
    let service: ProductService;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, RouterTestingModule.withRoutes(routes), HttpClientTestingModule],
            declarations: [ AppComponent, HomeComponent, AddProductComponent, EditComponent, ProductComponent, ProductDetailsComponent, PageNotFoundComponent, FeedbackComponent],
            providers: [ ProductService ]
        }).compileComponents();
    }));

    beforeEach(() => {
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);

        fixture = TestBed.createComponent(AppComponent);
        debugElement = fixture.debugElement;
        service = TestBed.inject(ProductService);

        router.initialNavigation();
    });

    it('should test redirection to default path', waitForAsync(()=>{
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(location.path()).toBe('/home');
        })
    }));
})