import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ShoppingCart } from '../interfaces/shopping-cart';
import { ConstantData } from './ConstantData';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private productStorage: ShoppingCart[] = [];
  private shoppingCart$: Subject<ShoppingCart[]>;

  constructor() {
    this.shoppingCart$ = new Subject();
  }


  addItemShoppingCart(item: ShoppingCart): void {

    const gotProdutcs = localStorage.getItem(ConstantData.ShoppingCartLocalStorageKey);
    console.log(gotProdutcs);

    if (gotProdutcs !== undefined && gotProdutcs !== "" && gotProdutcs !== null) {
      this.productStorage = JSON.parse(gotProdutcs ?? "");
    }
    item.precioTotal = item.precioUnitario * item.cantidad;

    this.productStorage?.push(item);
    this.shoppingCart$.next(this.productStorage); // Se aggrega el producto al subject.

    localStorage.setItem(ConstantData.ShoppingCartLocalStorageKey,
      JSON.stringify(this.productStorage));

    console.log(this.productStorage);
  }

  getShoppingCart(): Observable<ShoppingCart[]> {
    return this.shoppingCart$.asObservable();
  }
}
