import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';

import {TestData} from '../services/testData';

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
    // const studentsObservable = new Observable<Product[]>(observer => {
    //   setTimeout(() => {
    //       observer.next(TestData.products);
    //   }, 1000);
    // });
    
    // return studentsObservable;
  }
  
}
