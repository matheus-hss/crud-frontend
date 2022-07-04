import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  product: Product;
  private _subscription: Subscription;

  constructor(private _activatedRoute: ActivatedRoute,
              private router: Router,
              private _productsService: ProductsService) {
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

  public save(): void {
    this._productsService.save(this.product);
    this.router.navigate(['products']);
  }

}
