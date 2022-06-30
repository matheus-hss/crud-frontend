import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    ProductComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
