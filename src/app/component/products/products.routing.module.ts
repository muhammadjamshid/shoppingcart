import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { ProductListComponent } from './productlist.component';
import { ProductsComponent } from './products.component';



const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'productlist', component: ProductListComponent
      },
      {
        path: 'cart', component: CartComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/