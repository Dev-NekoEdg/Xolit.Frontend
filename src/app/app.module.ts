import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ProductsComponent } from './components/products/products.component';
import { TestData } from './services/testData';
import { AddShoppingCartComponent } from './components/add-shopping-cart/add-shopping-cart.component';
import { ConstantData } from './services/ConstantData';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProductsComponent,
    AddShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TestData, 
    ConstantData],
  bootstrap: [AppComponent]
})
export class AppModule { }
