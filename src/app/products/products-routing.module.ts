import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormComponent } from '../form/form.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, 
    children: [
      { path: ':id', component: ProductDetailComponent },
      { path: ':id/edit', component: FormComponent }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule { }
