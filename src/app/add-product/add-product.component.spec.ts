import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponent } from './add-product.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../product/product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [ProductService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have getProducts function', () => {
    const service: ProductService = TestBed.inject(ProductService);
    expect(service.getProducts).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing addProduct heading', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector('.text-center').textContent).toContain("Add New Product")
  });

  it('should have genId function', () => {
    expect(component.genId).toBeTruthy();
  });

  it('should have service addProduct function', () => {
    const service: ProductService = TestBed.inject(ProductService);
    expect(service.addProduct).toBeTruthy();
  });

  it('should have component addProduct function', () => {
    expect(component.addProduct).toBeTruthy();
  });

});
