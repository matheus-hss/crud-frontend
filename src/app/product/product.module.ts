import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { ValidDirective } from '../share/valid.directive';

@NgModule({
  declarations: [
    ProductComponent,
    ValidDirective
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
