import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  category: any = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]
  headers = new HttpHeaders();
  constructor(public _HttpClient: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjE2NjA3NzE3MjB9.0CavURwxnXL_VEt5N_RpAJaFdRH31nx4aBgMF1pZUPlSksj55lJMW5rU3mOouVYGqhV2pRca4jPi3CDwS2SDxw'
      );
  }

  getData(): Observable<any> {
    return this._HttpClient.get(
      'https://clothing-store55.herokuapp.com/c/GetProducts',
      {
        headers: this.headers,
      }
    );
  }


  getProductsList(): Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/products/category/' + this.category[3]);
  }

  getRelatedProductsList(): Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/products/category/' + this.category[3] + '?limit=3');

  }

  // getProductsDetails(id: any): Observable<any> {
  //   return this._HttpClient.get('https://fakestoreapi.com/products/' + id);
  // }

  // getProductsList(): Observable<any> {
  //   return this._HttpClient.get('https://clothing-store55.herokuapp.com/c/GetProducts');
  // }


}



