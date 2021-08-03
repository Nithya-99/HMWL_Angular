import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from '../product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service: ProductService, private router: Router) { }

  submit:boolean = false;
  newProduct: IProduct = {
    id: null,
    ProductName: '',
    code: '',
    price: null,
    ProductDescription: '',
    rating: null,
    image: ''
  }

  products: IProduct[] = [];
  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => console.log(err)
    });

    
  }

  genId(products: IProduct[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }
  
  addProduct(product: IProduct) {
    if (product.id == 0 || product == null || product.id == undefined) {
      product.id = this.genId(this.products);
      this.service.addProduct(product)
      .subscribe(product => {
        this.products.push(product);
      });
    }
    this.submit = true
    alert("Product Added Successfully!");
    this.router.navigate(['/products']);
  }
}
