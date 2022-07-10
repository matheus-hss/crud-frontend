import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../model/product';

@Injectable()
export class ProductsService {
  private _url = '/api/product/'

  constructor(private _httpClient: HttpClient) { }

  save(product: Product): Observable<any> {
    return this._httpClient.post(`${this._url}/lab/${product.lab.id}`, JSON.stringify(product), { headers: {'Content-Type': 'application/json'} })
  }

  remove(product: Product): Observable<any> {
    return this._httpClient.delete(`${this._url}/${product.id}`)
  }

  update(product: Product): Observable<any> {
    return this._httpClient.put(`${this._url}/${product.id}/lab/${product.lab.id}`, JSON.stringify(product), { headers: {'Content-Type': 'application/json'} })
  }

  findAll(): Observable<any> { return this._httpClient.get(this._url) }
}
