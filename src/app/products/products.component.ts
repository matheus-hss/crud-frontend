import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  list = new Array<Product>()

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void { 
    this._productsService.findAll().subscribe({
      next: (data:any) => this.list = data['content'],
      error: (msg:any) => console.log(msg)
    })
  }

  findByName(event: any): void { 
    this._productsService.findAll().subscribe({
      next: (data:any) => {
        this.list = data['content'].filter((p: Product) => p.productName.trim().toUpperCase()
          .startsWith(event.value.trim().toUpperCase()))
      },
      error: (msg:any) => console.log(msg)
    })
  }

}
