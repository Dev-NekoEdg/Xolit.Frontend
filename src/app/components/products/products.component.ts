import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public listProducts: Product[];
  constructor(
    private service: ProductService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts(): void {
    this.service.getProducts()
                .subscribe((data) => this.listProducts = data );
  }


}
