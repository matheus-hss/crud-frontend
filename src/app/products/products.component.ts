import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ProductsService } from './products.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  list: Product[];
  @ViewChild("inputName") name: ElementRef;

  constructor(private _productsService: ProductsService) { 
    this.list = [];
    this.name = new ElementRef('');
  }

  ngOnInit(): void { this.list = this._productsService.list(); }

  findByName(): void {
    this.list = this._productsService.list()
    .filter(p => p.productName.trim().toUpperCase().startsWith(
      this.name.nativeElement.value.trim().toUpperCase()))
  }

}
