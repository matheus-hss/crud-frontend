import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class ProductService {

  constructor() { }

  public save(product: Product, list: Product[]): Product [] {
    let index = list.indexOf(product);

    if(index == -1) list.push(product);

    list[index] = product;

    return list;
  }

  public remove(product: Product, list: Product[]): Product[] {
    let index = list.indexOf(product);
    list.splice(index, 1);

    return list;
  }

  public update(product: Product): Product {
    return product;
  }
}
