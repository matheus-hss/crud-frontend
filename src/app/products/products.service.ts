import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductsService {
  private _products: Product[];
  private _id: number;

  constructor() { 
    this._products = []; 
    this._id = 0; 
  }

  public save(product: Product): void {
    let index = this._products.indexOf(product);

    if(index == -1){
      this._id++;
      product.id = this._id;
      this._products.push(product);
    }
    
    this._products[index] = product;
  }

  public remove(product: Product): void {
    let index = this._products.indexOf(product);
    if(index != -1) this._products.splice(index, 1);
  }

  public list(): Product [] { return this._products; }
}
