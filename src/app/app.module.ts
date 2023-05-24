import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ProductsComponent } from './components/products/products.component';
import { TestData } from './services/testData';
import { ConstantData } from './services/ConstantData';
import { BuyProdutsComponent } from './components/buy-produts/buy-produts.component';
import { RowProductOnCartComponent } from './components/row-product-on-cart/row-product-on-cart.component';
import { ResponsesComponent } from './shared/responses/responses.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProductsComponent,
    BuyProdutsComponent,
    RowProductOnCartComponent,
    ResponsesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TestData,
    ConstantData],
  bootstrap: [AppComponent]
})
export class AppModule { }
