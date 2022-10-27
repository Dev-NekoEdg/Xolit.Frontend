import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart';
import { ConstantData } from 'src/app/services/ConstantData';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public productQuantity: number = 0;
  public productQuantityText: string = "0";

  private jsonProducts: ShoppingCart[] = []

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService) 
  {
  }

  ngOnInit(): void {
    console.log('onInit menu component');
    this.loadNotification();
  }

  loadNotification(): void {
    // this.shoppingCartService.loadShoppingCart();
    this.shoppingCartService.getShoppingCart$()
      .subscribe(items => {
        let count = this.countItems(items);
        this.productQuantity = count;
        this.productQuantityText = this.productQuantity > 9 ? "9+" : this.productQuantity.toString();
      });
  }

  goToBuyProdutcs(): void {
    this.router.navigate(['check-out']);
  }

  countItems(items: ShoppingCart[]){
    const result = items.reduce((accumulator, item) => {
      return accumulator + item.cantidad;
    }, 0);

    return result;
  }
  

  getProductsFromLocalStorage() {
    const gotProdutcs = localStorage.getItem(ConstantData.ShoppingCartLocalStorageKey);

    if (gotProdutcs !== undefined && gotProdutcs !== "" && gotProdutcs !== null) {
      this.jsonProducts = JSON.parse(gotProdutcs ?? "");

      // reduce: for each object we increment  the ´accumulator´ variable by ´cantidad´ value.
      // the 0 as second parameter means the we initilized the ´accumulator´ by 0.
      const result = this.jsonProducts.reduce((accumulator, item) => {
        return accumulator + item.cantidad;
      }, 0);

      this.productQuantity = result;
      this.productQuantityText = this.productQuantity > 9 ? "9+" : this.productQuantity.toString();
    }
  }
}
