import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyProdutsComponent } from './components/buy-produts/buy-produts.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:"products", component: ProductsComponent, pathMatch: "full"},
  {path:"check-out", component: BuyProdutsComponent, pathMatch: "full"},
  {path:"home", component: HomeComponent, pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
