import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/model/product';
import { Lab } from 'src/app/model/lab';
import { ProductsService } from '../products.service';
import { LabService } from './../../labs/labs.service';
import { IForm } from './../../model/iform';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, IForm {
  product = new Product()
  formChanged: boolean = false
  list = new Array<Lab>()

  constructor(private _activatedRoute: ActivatedRoute,
              private _productsService: ProductsService,
              private _labService: LabService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next: (param:any) => {
        this._productsService.findAll().subscribe({
          next: (data:any) => {
            let list: Array<Product> = data['content']
            for (let product of list) 
              if (product.id == param['id']) this.product = product;
          },
          error: (msg:any) => console.log(msg)
        })
      },
      error: (msg:any) => console.log(msg)
    });

    this._labService.findAll().subscribe({
      next: (data:any) => this.list = data['content'],
      error: (msg:any) => console.log(msg)
    })
  }

  onSubmit(productForm:any) {
    if(this.product.id == '') {
      this._productsService.save(this.product).subscribe({
        next: (data:any) => {
          window.alert('Added')
          productForm.form.reset()
          this.formChanged = false
        },
        error: (msg:any) => console.log(msg)
      })
    }
    else {
      this._productsService.update(this.product).subscribe({
        next: (data:any) => {
          window.alert('Updated')
          this.formChanged = false
        },
        error: (msg:any) => console.log(msg)
      })
    }
  }

  clear(productForm: any) { productForm.form.reset() }

  onInput() { this.formChanged = true; }

  changeRoute(): boolean {
    if(this.formChanged) return window.confirm("Are you sure? Data won't be saved.")

    return true
  }

}
