import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { TrimPipe } from './shared/trim.pipe';
import { RegistrationComponent } from './component/registration/registration.component';
import { SharedModule } from './shared/shared.module';
import { RouteGuard } from './routeguard.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './service/toastr.service';
import { ToastsContainer } from './shared/toastr.container';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [RouteGuard,ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
