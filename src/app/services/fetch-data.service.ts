import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  category: any = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
  headers = new HttpHeaders();
  token: string | null = '';
  constructor(public _HttpClient: HttpClient) {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token);
  }

  getData(): Observable<any> {
    return this._HttpClient.get(`${environment.apiBaseUrl}/c/GetProducts`, {
      headers: this.headers,
    });
  }
  getProductsList(): Observable<any> {
    return this._HttpClient.get(
      'https://fakestoreapi.com/products/category/' + this.category[3]
    );
  }

  // getProductsList(): Observable<any> {
  //   return this._HttpClient.get('https://clothing-store55.herokuapp.com/c/GetProducts');
  // }

  // getProductsDetails(id: any): Observable<any> {
  //   return this._HttpClient.get('https://fakestoreapi.com/products/' + id);
  // }

  getRelatedProductsList(): Observable<any> {
    return this._HttpClient.get(
      'https://fakestoreapi.com/products/category/' +
        this.category[3] +
        '?limit=3'
    );
  }
}
