import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Invoice } from 'src/app/interfaces/invoice';
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
  public hasProducts: boolean = true;
  public listValidAmount: number[] = ConstantData.AmountProductAviable;
  public total: number = 0;
  public invoice: Invoice;
  public formReactive: FormGroup;
  public minDateInvoice:Date;
  public maxDateInvoice:Date;

  constructor
    (
      private builder: FormBuilder,
      private shoppingCartService: ShoppingCartService
    ) {
    console.log('constructor');
    this.loadShoppingCart();
    this.SetMinMaxDates();
    this.emptyInvoice();
    this.createFrom();
  }

  SetMinMaxDates() {
    this.minDateInvoice = new Date();
    let maxDate = this.minDateInvoice;
    maxDate = new Date(maxDate.setMonth(this.minDateInvoice.getMonth() + 1).toString());
    this.maxDateInvoice = maxDate;
  }
  
  createFrom() {
    this.formReactive = this.builder.group({
      name: [''],
      lastName: [''],
      identification: [''],
      phoneNumber: [''],
      deliveryAddress: [''],
      emailAddress: [''],
      deliveryDate: [''],
    });
  }

  emptyInvoice() {
    this.invoice = {
      givenNames: "",
      surName: "",
      identification: "",
      phoneNumber: "",
      deliveryAddress: "",
      emailAddress: "",
      deliveryDate: new Date(),
      saleDate: new Date(),
      total: 0,
      products: []
    }
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  loadShoppingCart(): void {
    this.shoppingCartService.getShoppingCart$().subscribe(data => {
      // console.log({'infoSubs' : data})
      this.listShoppingCart = data;
      this.total = data.reduce((accumulator, obj) => { return accumulator + obj.precioTotal; }, 0);
      // this.hasProducts= (this.listShoppingCart.length > 0);
    });
  }

  saveInvoice(): void {


  }

}
