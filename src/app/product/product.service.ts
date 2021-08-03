import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "../product";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/products'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // private handleError(err){
  //   let errorMEssage: string;
  //   if(err.error);
  //   )
  // }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(tap(data => { console.log("All Data: " + JSON.stringify(data)) }))
  }

  getProduct(id: number): Observable<IProduct> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<IProduct>(url).pipe(
      tap(data => console.log(`fetched hero id=${id}`+JSON.stringify(data))));
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.productUrl, product, this.httpOptions).pipe(
      tap((newProduct: IProduct) => console.log(`added product w/ id=${newProduct.id}`))
    );
  }

  delete(id: number): Observable<IProduct> {
    const url = `${this.productUrl}/${id}`;
    return this.http.delete<IProduct>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted hero id=${id}`))
    );
  }

  update(product: IProduct): Observable<any> {
    return this.http.put(this.productUrl, product, this.httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${product.id}`))
    );
  }

}

