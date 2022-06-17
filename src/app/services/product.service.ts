import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private urlApiProducts: string = 'http://localhost:5148/v1/Producto';

  constructor(
    private http: HttpClient
  ) { }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlApiProducts);
    // return Observable.of(TestData.products)
  }
  
}
