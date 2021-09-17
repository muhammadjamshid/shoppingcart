import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './productlist.component';
import { CartComponent } from '../cart/cart.component';
import { HeaderComponent } from '../header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from 'src/app/shared/toastr.container';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    NgbModule
  ],
  declarations: [ProductsComponent,ProductListComponent,CartComponent,HeaderComponent,ToastsContainer
  ]
})
export class ProductsModule { }