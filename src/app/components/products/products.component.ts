import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart';
import { ConstantData } from 'src/app/services/ConstantData';
import { ProductService } from 'src/app/services/product.service';
import { AddShoppingCartComponent } from '../add-shopping-cart/add-shopping-cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public listProducts: Product[];
  public shoppingCartStorage: ShoppingCart;
  public aviableAmount: number[];
  
  constructor(
    private service: ProductService
  ) { 
    this.shoppingCartStorage = this.emptyShoppingCart();
    this.aviableAmount = ConstantData.AmountProductAviable;
  }

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts(): void {
    this.service.getProducts()
                .subscribe((data) => this.listProducts = data );
  }

  addProduct(currentProduct: Product): void {
    //alert('Se guardo');
    this.loadShoppingCart(currentProduct);

  }

  loadShoppingCart(currentProduct: Product): void {
    this.shoppingCartStorage.productoId = currentProduct.id;
    this.shoppingCartStorage.nombreProducto = currentProduct.nombre;
    this.shoppingCartStorage.cantidad = 1;
    this.shoppingCartStorage.porcentajeInpuesto = currentProduct.porcentajeIVAAplicado;
    this.shoppingCartStorage.precioUnitario = currentProduct.valorVentaConIva;

  }

  emptyShoppingCart(): ShoppingCart {
    return {
      productoId: '',
      nombreProducto: '',
      precioUnitario: 0,
      cantidad: 0,
      precioTotal: 0,
      porcentajeInpuesto: 0
    };
  }

}
