import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Lab } from './../model/lab';

@Injectable()
export class LabService {
  private _url: string = '/api/lab/'
  
  constructor(private _httpClient: HttpClient) { }

  save(lab: Lab): Observable<any> {
    return this._httpClient.post(this._url, JSON.stringify(lab), { headers: {'Content-Type': 'application/json'} })
  }

  delete(lab: Lab): Observable<any> {
    return this._httpClient.delete(`${this._url}/${lab.id}`)
  }

  update(lab: Lab): Observable<any> {
    return this._httpClient.put(`${this._url}/${lab.id}`, JSON.stringify(lab), { headers: {'Content-Type': 'application/json'} })
  }

  findAll(): Observable<any> {
    return this._httpClient.get(this._url)
  }

  searchByZipCode(cep: string): Observable<any> {
    return this._httpClient.get(`http://viacep.com.br/ws/${cep}/json/`)
  }
}
