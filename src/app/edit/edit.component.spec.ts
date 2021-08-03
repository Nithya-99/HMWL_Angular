import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../product/product.service';

import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      providers: [ProductService],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing editProduct heading',()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector('.text-center').textContent).toContain("Edit Product")
  });

  it('should have component save function',()=>{
    expect(component.save).toBeTruthy();
  })

  it('should have service update function', () => {
    const service: ProductService = TestBed.inject(ProductService);
    expect(service.update).toBeTruthy();
  });

  it('should have service getProduct function', () => {
    const service: ProductService = TestBed.inject(ProductService);
    expect(service.getProduct).toBeTruthy();
  });

  it('should have component getProduct function', () => {
    expect(component.getProduct).toBeTruthy();
  });

});
