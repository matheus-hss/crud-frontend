import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsService } from './products.service';
import { LabModule } from '../labs/labs.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent,
    ProductDetailComponent
  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    LabModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
