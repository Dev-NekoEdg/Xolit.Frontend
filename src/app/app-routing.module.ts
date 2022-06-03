import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutsComponent } from './components/produts/produts/produts.component';

const routes: Routes = [
  {path:"products", component: ProdutsComponent, pathMatch: "full"},
  {path:"home", component: HomeComponent, pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
