import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product;
  private _subscription: Subscription

  constructor(private _activatedRoute: ActivatedRoute,
              private _productsService: ProductsService,
              private _router: Router) {
    this.product = new Product();
    this._subscription = new Subscription();
  }

  ngOnInit(): void {
    this._subscription = this._activatedRoute.params.subscribe(param => {
      let list = this._productsService.list();
      for (let product of list) {
        if (product.id == param['id']) this.product = product;
      }
    });
  }

  ngOnDestroy(): void { this._subscription.unsubscribe(); }

  edit() { this._router.navigate(['products', this.product.id, 'edit']); }

  remove() {
    this._productsService.remove(this.product);
    this._router.navigate(['products']);
  }

}
