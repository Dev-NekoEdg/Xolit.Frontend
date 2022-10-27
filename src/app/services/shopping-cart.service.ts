import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ShoppingCart } from '../interfaces/shopping-cart';
import { ConstantData } from './ConstantData';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private productStorage: ShoppingCart[] = [];
  private shoppingCart$: BehaviorSubject<ShoppingCart[]>;

  constructor() {
    //this.shoppingCart$ = new Subject();
    this.shoppingCart$ = new BehaviorSubject<ShoppingCart[]>([]);
  }


  getProductsFromLocalStorage() {
    const gotProdutcs = localStorage.getItem(ConstantData.ShoppingCartLocalStorageKey);

    if (gotProdutcs !== undefined && gotProdutcs !== "" && gotProdutcs !== null) {
      this.productStorage = JSON.parse(gotProdutcs ?? "");
    }
  }

  loadShoppingCart() {
    this.getProductsFromLocalStorage();
    this.shoppingCart$.next(this.productStorage);
    console.log({ 'loadShoppingCart': this.productStorage });
  }


  addItemShoppingCart(item: ShoppingCart): void {

    this.getProductsFromLocalStorage();
    item.precioTotal = item.precioUnitario * item.cantidad;

    let existingItem = this.productStorage?.find((i) => { return i.productoId === item.productoId });
    if (existingItem !== null && existingItem !== undefined) {
      const index = this.productStorage.indexOf(existingItem);
      item.precioTotal = item.precioUnitario * item.cantidad;
      existingItem.cantidad += item.cantidad;
      existingItem.precioTotal = existingItem.precioUnitario * existingItem.cantidad;
      this.productStorage[index] = existingItem;
    }
    else {

      this.productStorage?.push(item);
    }

    this.shoppingCart$.next(this.productStorage); // Se aggrega el producto al subject.

    localStorage.setItem(ConstantData.ShoppingCartLocalStorageKey,
      JSON.stringify(this.productStorage));

    console.log(this.productStorage);
  }

  removeItemShoppingCart(item: ShoppingCart): void {

    this.getProductsFromLocalStorage();
    let index = this.productStorage.indexOf(item);
    if (index > -1) {
      this.productStorage.splice(index, 1);
    }

    this.shoppingCart$.next(this.productStorage);

    localStorage.setItem(ConstantData.ShoppingCartLocalStorageKey,
      JSON.stringify(this.productStorage));

    console.log(this.productStorage);
  }

  getShoppingCart$(): Observable<ShoppingCart[]> {
    this.getProductsFromLocalStorage();
    this.shoppingCart$.next(this.productStorage);
    return this.shoppingCart$.asObservable();
  }
}
