import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { productCodePipe } from 'src/app/shared/product-code.pipe';
import { starRatingPipe } from 'src/app/shared/star/star-pipe';
import { ProductService } from '../product.service';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent, productCodePipe, starRatingPipe ],
      imports:[HttpClientTestingModule, FormsModule, RouterTestingModule],
      providers: [ ProductService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create product details component', () => {
    expect(component).toBeTruthy();
  });

  it('testing productDetails heading',()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector('.text-center').textContent).toContain("Product Details")
  });

  it('should have getProducts function', () => {
    const service: ProductService = TestBed.inject(ProductService);
    expect(service.getProducts).toBeTruthy();
   });

   it('should have delete function', () => {
    const service: ProductService = TestBed.inject(ProductService);
    expect(service.delete).toBeTruthy();
   });

   it('should have getProduct function', () => {
    const service: ProductService = TestBed.inject(ProductService);
    expect(service.getProduct).toBeTruthy();
   });

});
