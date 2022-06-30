import { Component, OnInit } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  list: Product [];

  constructor() {
    this.product = new Product();
    this.list = [];
   }

  ngOnInit(): void {
  }

  public save(): void {
    let index = this.list.indexOf(this.product);

    if(index == -1){
      this.list.push(this.product);
    }

    this.list[index] = this.product;
    this.product = new Product();
  }

  public remove(product: Product): void {
    let index = this.list.indexOf(product);
    this.list.splice(index, 1);
  }

  public update(product: Product){
    this.product = product;
  }

}
