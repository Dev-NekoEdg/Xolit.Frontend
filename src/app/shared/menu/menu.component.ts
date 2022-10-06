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
  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.loadnotification();
  }

  loadnotification(): void {
    this.shoppingCartService.getShoppingCart$()
    .subscribe(itemShoppingCart => { 
      this.productQuantity = itemShoppingCart.length;
      this.productQuantityText = this.productQuantity > 9 ? "9+" : this.productQuantity.toString();  });
  }

  goToBuyProdutcs(): void {
    this.router.navigate(['check-out']);
  }

}
