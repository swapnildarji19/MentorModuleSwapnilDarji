import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { StatusComponent } from './components/status/status.component';

const routes: Routes = [
  {
      path: 'products',
      component: ProductsComponent ,
  },
  {
    path: 'cart',
    component: CartComponent ,
},
{
  path: 'cart/status',
  component: StatusComponent ,
},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
