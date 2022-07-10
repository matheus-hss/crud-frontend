import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductsService) { this.product = new Product() }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next: (param:any) => {
        this._productsService.findAll().subscribe({
          next: (data:any) => {
            let list: Array<Product> = data['content']
            for(let product of list)
              if(product.id == param['id']) this.product = product
          }
        })
      },
      error: (msg: any) => console.log(msg)
    })
  }

  edit(): void { this._router.navigate(['products', this.product.id, 'edit']); }

  remove(): void {
    this._productsService.remove(this.product).subscribe({
      next: (data:any) => window.alert('Deleted'),
      error: (msg:any) => console.log(msg)
    })
  }

}
