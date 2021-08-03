import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // model: Model = new Model();
  products: IProduct[] = [];
  productName: string;
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next: products => {
        // console.log(products)
        this.products = products;
      },
      error: err => console.log(err)
    });
  }

  getProducts(): IProduct[] {
    return this.products;
  }


  // newProduct: Product = new Product();

  // get jsonProduct() {
  //   return JSON.stringify(this.newProduct);
  // }

  search(): void {
    if (this.productName != "") {
      this.products = this.products.filter(res => {
        return res.ProductName.toLowerCase().match(this.productName.toLowerCase())
      })
      if(this.products.length == 0){
        document.getElementById('noProduct').innerHTML = 'No Products Found!'
      }
    } else if (this.productName == '') {
      this.ngOnInit();
      document.getElementById('noProduct').innerHTML = ''
    } 
  }
}
