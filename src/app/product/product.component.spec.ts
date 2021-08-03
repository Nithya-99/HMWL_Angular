import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { starRatingPipe } from '../shared/star/star-pipe';

import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent, starRatingPipe ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ ProductService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create product component', () => {
    expect(component).toBeTruthy();
  });

  it('should have search function', () => {
    expect(component.search).toBeTruthy();
  });
  it('testing products heading',()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector('.text-center').textContent).toContain("Products")
  });
});
