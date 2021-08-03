import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  products: IProduct[] = [];
  submit:boolean = false;
  
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
  }
  
  getProduct(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service.getProduct(id)
      .subscribe(product => { this.product = product; console.log(this.product) });
  }

  save(): void {
    if (this.product) {
      this.service.update(this.product)
        .subscribe();
    }
    this.submit = true;
    alert("Item updated sucessfully")
    this.router.navigate(['/products']);
  }
}
