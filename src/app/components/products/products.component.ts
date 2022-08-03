import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  private nameShoppingCart: string = "shoppinCartXolit";

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
      .subscribe((data) => this.listProducts = data);
  }

  addProduct(currentProduct: Product): void {
    //alert('Se guardo');
    //TODO:  settear el combobox en 0.
    this.loadShoppingCart(currentProduct);

  }

  loadShoppingCart(currentProduct: Product): void {
    this.shoppingCartStorage.productoId = currentProduct.id;
    this.shoppingCartStorage.nombreProducto = currentProduct.nombre;
    this.shoppingCartStorage.cantidad = 1;
    this.shoppingCartStorage.porcentajeInpuesto = currentProduct.porcentajeIVAAplicado;
    this.shoppingCartStorage.precioUnitario = currentProduct.valorVentaConIva;

  }

  addShoppingCart(currentProduct: ShoppingCart): void {
    let productStorage: ShoppingCart[] = [];
    const gotProdutcs = localStorage.getItem(this.nameShoppingCart);
    console.log(gotProdutcs);
    if (gotProdutcs !== undefined && gotProdutcs !== "" && gotProdutcs !== null) {
      productStorage = JSON.parse(gotProdutcs ?? "");
    }
    currentProduct.precioTotal = currentProduct.precioUnitario * currentProduct.cantidad;
    productStorage?.push(currentProduct);
    localStorage.setItem(this.nameShoppingCart, JSON.stringify(productStorage));

    console.log(productStorage);

    // let modal = document.getElementById("staticBackdrop");
    // modal?.classList.remove("mystyle");
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
