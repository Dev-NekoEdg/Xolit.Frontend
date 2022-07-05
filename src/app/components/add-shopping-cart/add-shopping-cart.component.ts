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
    this.loadShoppingCart()
  }

  ngOnInit(): void {
  }

  loadShoppingCart(): void {
    this.shoppingCartStorage.productoId = this.product.id;
    this.shoppingCartStorage.nombreProducto = this.product.nombre;
    this.shoppingCartStorage.cantidad = 1;
    this.shoppingCartStorage.porcentajeInpuesto = this.product.porcentajeIVAAplicado;
    this.shoppingCartStorage.precioUnitario = this.product.valorVentaConIva;

  }
}
