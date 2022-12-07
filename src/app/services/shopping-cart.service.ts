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


  private getProductsFromLocalStorage(): ShoppingCart[] {
    const gotProdutcs = localStorage.getItem(ConstantData.ShoppingCartLocalStorageKey);
    let productStorage: ShoppingCart[] = [];
    if (gotProdutcs !== undefined && gotProdutcs !== "" && gotProdutcs !== null) {
      productStorage = JSON.parse(gotProdutcs ?? "");
    }

    return productStorage;
  }

  loadShoppingCart() {
    this.productStorage = this.getProductsFromLocalStorage();
    this.shoppingCart$.next(this.productStorage);
    console.log({ 'loadShoppingCart': this.productStorage });
  }


  addItemShoppingCart(item: ShoppingCart): void {

    this.productStorage = this.getProductsFromLocalStorage();
    console.log({'this.productStorage':this.productStorage});

    let currentIndex = this.productStorage.findIndex(x => x.productoId === item.productoId);
    console.log({currentIndex: currentIndex});
    if (currentIndex >= 0) {
      console.log('entro al if');
      let existingItem = this.productStorage[currentIndex];
      existingItem.cantidad += item.cantidad;
      existingItem.precioTotal = existingItem.precioUnitario * existingItem.cantidad;
      this.productStorage[currentIndex] = existingItem;
    }
    else {

      this.productStorage?.push(item);
    }

    this.shoppingCart$.next(this.productStorage); // Se aggrega el producto al subject.
    this.saveLocalStorage();
  }

  removeItemShoppingCart(item: ShoppingCart): void {

    this.productStorage = this.getProductsFromLocalStorage();
    let index = this.productStorage.findIndex(x => x.productoId === item.productoId);

    this.productStorage.forEach((value, index) => {
      if (value.productoId == item.productoId) {
        this.productStorage.splice(index, 1);
      }
    });

    // console.log({index: index});
    // if (index > -1) {
    //   this.productStorage.splice(index, 1);
    // }

    this.shoppingCart$.next(this.productStorage);
    this.saveLocalStorage();
    console.log(this.productStorage);
  }

  updateItemShoppingCart(item: ShoppingCart): void {

    this.productStorage = this.getProductsFromLocalStorage();
    let index = this.productStorage.findIndex(x => x.productoId === item.productoId);
    console.log({ index: index });
    console.log({ ItemShopping: item });

    if (index < 0) {
      // exception.
    }

    let currentItem = this.productStorage[index];
    currentItem.cantidad = item.cantidad;
    currentItem.precioTotal = item.precioTotal;

    this.productStorage[index] = currentItem;
    
    this.shoppingCart$.next(this.productStorage);

    this.saveLocalStorage();
  }


  getShoppingCart$(): Observable<ShoppingCart[]> {
    this.productStorage = this.getProductsFromLocalStorage();
    this.shoppingCart$.next(this.productStorage);
    return this.shoppingCart$.asObservable();
  }


  private saveLocalStorage(): void{
    localStorage.setItem(ConstantData.ShoppingCartLocalStorageKey,
      JSON.stringify(this.productStorage));
    }
}
