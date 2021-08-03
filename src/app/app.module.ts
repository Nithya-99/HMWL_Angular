import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product/product-data';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarComponent } from './shared/star/star.component';
import { starRatingPipe } from './shared/star/star-pipe';
import { productCodePipe } from './shared/product-code.pipe';
import { FormsModule } from '@angular/forms';
import { AddProductGuard } from './add-product/add-product.guard';
import { EditGuard } from './edit/edit.guard';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    StarComponent,
    starRatingPipe,
    productCodePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    NgbModule,
    FormsModule
  ],
  providers: [ProductService,AddProductGuard, EditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
