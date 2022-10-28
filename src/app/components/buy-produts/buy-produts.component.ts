import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart';
import { ConstantData } from 'src/app/services/ConstantData';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-buy-produts',
  templateUrl: './buy-produts.component.html',
  styleUrls: ['./buy-produts.component.css']
})
export class BuyProdutsComponent implements OnInit {

  public listShoppingCart: ShoppingCart[] = [];
  constructor(
    private shoppingCartService: ShoppingCartService
  ) { 
    console.log('constructor');
    this.loadShoppingCart();
  }
  
  ngOnInit(): void {
    console.log('OnInit');
  }

  loadShoppingCart(): void {
    this.shoppingCartService.getShoppingCart$().subscribe(data =>{
      console.log({'infoSubs' : data})
     this.listShoppingCart = data;
    });
    
    // const gotProdutcs = localStorage.getItem(ConstantData.ShoppingCartLocalStorageKey);
    
    // if (gotProdutcs !== undefined && gotProdutcs !== "" && gotProdutcs !== null) {
    //   this.listShoppingCart = JSON.parse(gotProdutcs ?? "");
    // }

    console.log(this.listShoppingCart);
  }

  removeItemFromShoppingCart(item: ShoppingCart): void{
    console.log('removeItemFromShoppingCart');
    this.shoppingCartService.removeItemShoppingCart(item);
  }

  
}
