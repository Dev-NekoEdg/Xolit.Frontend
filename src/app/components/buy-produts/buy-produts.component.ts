import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor
    (
      private builder: FormBuilder,
      private shoppingCartService: ShoppingCartService
    ) {
    this.loadShoppingCart();
    this.emptyInvoice();
    this.createFrom();
  }

  ngOnInit(): void {
    
  }
   
  // Getters 
  get getterValidName(){
    return this.formReactive.get('name')?.invalid && this.formReactive.get('name')?.touched;
  }

  get getterValidLastName(){
    return this.formReactive.get('lastName')?.invalid && this.formReactive.get('lastName')?.touched;
  }

  get getterValidIdentification(){
    return this.formReactive.get('identification')?.invalid && this.formReactive.get('identification')?.touched;
  }

  get getterValidPhoneNumber(){
    return this.formReactive.get('phoneNumber')?.invalid && this.formReactive.get('phoneNumber')?.touched;
  }
  
  get getterValidDeliveryAddress(){
    return this.formReactive.get('deliveryAddress')?.invalid && this.formReactive.get('deliveryAddress')?.touched;
  }
  
  get getterValidEmailAddress(){
    return this.formReactive.get('emailAddress')?.invalid && this.formReactive.get('emailAddress')?.touched;
  }
  
  get getterValidDeliveryDate(){
    return this.formReactive.get('deliveryDate')?.invalid && this.formReactive.get('deliveryDate')?.touched;
  }

  createFrom() {
    this.formReactive = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      identification: ['', 
        [Validators.required, 
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern('^[0-9,$]*$')
        ]
      ],
      phoneNumber: ['', [
        Validators.required, 
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern('^[0-9,$]*$')
      ]],
      deliveryAddress: ['', [
        Validators.required, 
        Validators.minLength(5),
        Validators.maxLength(50)
      ]],
      emailAddress: ['', [
        Validators.required, 
        Validators.minLength(5),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]],
      deliveryDate: ['', [Validators.required, this.validationDeliveryDate]],
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

  loadShoppingCart(): void {
    this.shoppingCartService.getShoppingCart$().subscribe(data => {
      // console.log({'infoSubs' : data})
      this.listShoppingCart = data;
      this.total = data.reduce((accumulator, obj) => { return accumulator + obj.precioTotal; }, 0);
      // this.hasProducts= (this.listShoppingCart.length > 0);
    });
  }

  saveInvoice(): void {
    
    console.log(this.formReactive);
    if(this.formReactive.invalid){

      return Object.values(this.formReactive.controls).forEach(control=> {
        control.markAsTouched();
      });

    }
  }

  validationDeliveryDate(control: FormControl): {[s:string]:boolean} | null {
    const currentDate = new Date(); 
    const currentDateNumber : number = Date.now();

    const maxDateNumber : number = currentDate.setMonth(currentDate.getMonth() + 1);
    const dateControl : number = Date.parse(control.value);

    if(dateControl == null || dateControl == undefined){
      return { validDate : true };
    }
    if(dateControl > currentDateNumber && dateControl < maxDateNumber){
      // return { validDate : true };
      return null;
    }
    else{
      return { validDate : true }
    }
  }
}
