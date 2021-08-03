import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ProductService } from './product.service';
import { IProduct } from '../product';

describe('ProductService', () => {
  let service: ProductService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[
        ProductService
      ]
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', inject([ProductService],(service:ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should successfully get products', waitForAsync(()=>{
    const productData:IProduct[] = [{id:0,"ProductName":"Bangles","code":"abc 123","price":100,"ProductDescription":"Random description","rating":4,"image":"link"}];
    service.getProducts().subscribe(res => expect(res).toEqual(productData));
    let productRequest=httpTestingController.expectOne('api/products');
    productRequest.flush(productData);
  }));

  
});
