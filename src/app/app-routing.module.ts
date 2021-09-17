import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { RouteGuard } from './routeguard.guard';

const routes: Routes = [
  {path:'', component: RegistrationComponent},

  {
    path: 'products',
    loadChildren: () => import('./component/products/products.module').then(m => m.ProductsModule),canActivate:[RouteGuard]
  },

  {path:'', redirectTo:'',pathMatch:'full'},
  {path:'**',component:RegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
