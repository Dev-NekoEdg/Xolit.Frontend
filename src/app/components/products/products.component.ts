import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart';
import { ConstantData } from 'src/app/services/ConstantData';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public listProducts: Product[];
  public shoppingCartStorage: ShoppingCart;
  public aviableAmount: number[];

  constructor(
    private service: ProductService,
    private shoppingCartService: ShoppingCartService,
    private router: Router,
  ) {
    this.shoppingCartStorage = this.emptyShoppingCart();
    this.aviableAmount = ConstantData.AmountProductAviable;
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.service.getProducts().subscribe(
      (data) => {
        data.forEach(x => x.urlProducto = (x.isBase64Image ? 'data:image/png;base64,' + x.urlProducto : x.urlProducto));
        console.log(data);
        this.listProducts = data;
      });
  }

  addProduct(currentProduct: Product): void {
    //alert('Se guardo');
    //let shoppingProduct = this.loadShoppingCart(currentProduct);
    this.shoppingCartStorage = this.loadShoppingCart(currentProduct);
    this.shoppingCartService.addItemShoppingCart(this.shoppingCartStorage)

  }

  goToShoppingCart(): void {
    this.router.navigate(['check-out']);
  }

  private loadShoppingCart(currentProduct: Product): ShoppingCart {
    let newShoppingCartItem: ShoppingCart = this.emptyShoppingCart();
    newShoppingCartItem.productoId = currentProduct.productoId;
    newShoppingCartItem.nombreProducto = currentProduct.nombre;
    newShoppingCartItem.descripcionProducto = currentProduct.detalleProducto;
    newShoppingCartItem.cantidad = 1;
    newShoppingCartItem.porcentajeInpuesto = currentProduct.porcentajeIVAAplicado;
    newShoppingCartItem.precioUnitario = currentProduct.valorVentaConIva;
    newShoppingCartItem.image = currentProduct.urlProducto;
    newShoppingCartItem.isImageBase64 = currentProduct.isBase64Image;
    newShoppingCartItem.precioTotal = newShoppingCartItem.precioUnitario * newShoppingCartItem.cantidad;

    return newShoppingCartItem;
  }

  emptyShoppingCart(): ShoppingCart {
    return {
      productoId: -1,
      nombreProducto: '',
      descripcionProducto: '',
      precioUnitario: 0,
      cantidad: 0,
      precioTotal: 0,
      porcentajeInpuesto: 0,
      image: '',
      isImageBase64: false
    };
  }

}
