import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  list: Product [];

  constructor(private _productService: ProductService) {
    this.product = new Product();
    this.list = [];
   }

  ngOnInit(): void {
  }

  public save(): void {
    this.list = this._productService.save(this.product, this.list);
    this.product = new Product();
  }

  public remove(product: Product): void {
    this.list = this._productService.remove(product, this.list);
  }

  public update(product: Product): void {
    this.product = this._productService.update(product);
  }

  public clear(): void {
    this.product = new Product();
  }

}
