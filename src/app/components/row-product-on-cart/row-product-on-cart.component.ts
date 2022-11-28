import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart';
import { ConstantData } from 'src/app/services/ConstantData';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-row-product-on-cart',
  templateUrl: './row-product-on-cart.component.html',
  styleUrls: ['./row-product-on-cart.component.css']
})
export class RowProductOnCartComponent implements OnInit {
  @Input('currentProduct') product: ShoppingCart;

  public listValidAmount: number[] = ConstantData.AmountProductAviable;
  constructor(
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  changeAmount(): void {
    this.product.precioTotal =  this.product.cantidad * this.product.precioUnitario;

    this.shoppingCartService.updateItemShoppingCart(this.product);
  }

  removeItemFromShoppingCart(item: ShoppingCart): void{
    console.log('removeItemFromShoppingCart');
    this.shoppingCartService.removeItemShoppingCart(item);
  }

}
