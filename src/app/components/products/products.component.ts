import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { AddShoppingCartComponent } from '../add-shopping-cart/add-shopping-cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public listProducts: Product[];
  constructor(
    private service: ProductService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts(): void {
    this.service.getProducts()
                .subscribe((data) => this.listProducts = data );
  }

  addProduct(currentProduct: Product): void {
    //alert('Se guardo');
    const modalRef = this.modalService.open(AddShoppingCartComponent);
    modalRef.componentInstance.product = currentProduct;
  }
}
