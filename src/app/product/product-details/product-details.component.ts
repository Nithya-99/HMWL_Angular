import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products: IProduct[] = [];
  
  product: IProduct = {
    id: 0,
    ProductName: '',
    code: '',
    price: 0,
    ProductDescription: '',
    rating: 0,
    image: ''
  };
  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();

    this.service.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => console.log(err)
    });
  }

  getProduct(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service.getProduct(id)
      .subscribe(product => { this.product = product; console.log(this.product) });
  }

  delete(product: IProduct): void {
    if (confirm("Are you sure you want to delete!")) {
      this.products = this.products.filter(h => h !== product);
      this.service.delete(product.id).subscribe();
      alert("Item deleted sucessfully")
      this.router.navigate(['/products']);
    }else{
      alert("Item not deleted.")
    }

  }
  

}
