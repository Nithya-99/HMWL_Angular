import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logo', () => {
    const logo = fixture.nativeElement.querySelector("#logo");
    expect(logo).toBeTruthy();
  });

  it('should have home link', () => {
    const home = fixture.nativeElement.querySelector("#home");
    expect(home).toBeTruthy();
  });

  it('should have products link', () => {
    const products = fixture.nativeElement.querySelector("#products");
    expect(products).toBeTruthy();
  });

  it('should have add link', () => {
    const add = fixture.nativeElement.querySelector("#add");
    expect(add).toBeTruthy();
  });

  it('should have feedback link', () => {
    const feedback = fixture.nativeElement.querySelector("#feedback");
    expect(feedback).toBeTruthy();
  });
});
