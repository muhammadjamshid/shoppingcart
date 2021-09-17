import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './productlist.component';
import { CartComponent } from '../cart/cart.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  declarations: [    ProductsComponent,ProductListComponent,CartComponent,HeaderComponent
  ]
})
export class ProductsModule { }