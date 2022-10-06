import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-buy-produts',
  templateUrl: './buy-produts.component.html',
  styleUrls: ['./buy-produts.component.css']
})
export class BuyProdutsComponent implements OnInit {

  public listShoppingCart: ShoppingCart[];
  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.loadShoppingCart();
  }

  loadShoppingCart(): void {
    this.shoppingCartService.getShoppingCart$().subscribe((data) => this.listShoppingCart = data);

  }

  removeItemFromShoppingCart(item: ShoppingCart): void{

  }

}
