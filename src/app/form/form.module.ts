import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { ValidDirective } from '../share/valid.directive';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [
    FormComponent,
    ValidDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsModule
  ]
})
export class FormModule { }
