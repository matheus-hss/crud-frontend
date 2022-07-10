import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormGuardService } from '../guards/form-guard.service';

const routes: Routes = [
  { path: '', component: ProductsComponent,
    children: [
      { path: 'register', component: ProductFormComponent, canDeactivate: [FormGuardService]},
      { path: ':id', component: ProductDetailComponent },
      { path: ':id/edit', component: ProductFormComponent, canDeactivate: [FormGuardService] }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
