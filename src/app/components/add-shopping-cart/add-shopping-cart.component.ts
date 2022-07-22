import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart';



@Component({
  selector: 'app-add-shopping-cart',
  templateUrl: './add-shopping-cart.component.html',
  styleUrls: ['./add-shopping-cart.component.css']
})

export class AddShoppingCartComponent implements OnInit {

  @Input() product: Product;

  public shoppingCartStorage: ShoppingCart;
  constructor() {
  }

  ngOnInit(): void {
    this.shoppingCartStorage = this.emptyShoppingCart();
    console.log(this.product);
    this.loadShoppingCart()
  }

  loadShoppingCart(): void {
    this.shoppingCartStorage.productoId = this.product.id;
    this.shoppingCartStorage.nombreProducto = this.product.nombre;
    this.shoppingCartStorage.cantidad = 1;
    this.shoppingCartStorage.porcentajeInpuesto = this.product.porcentajeIVAAplicado;
    this.shoppingCartStorage.precioUnitario = this.product.valorVentaConIva;

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
