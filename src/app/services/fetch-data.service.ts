import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
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

  constructor(public _HttpClient: HttpClient) { }

  getProductsList(): Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/products/category/' + this.category[3]);
  }

  // getProductsList(): Observable<any> {
  //   return this._HttpClient.get('https://clothing-store55.herokuapp.com/c/GetProducts');
  // }

  // getProductsDetails(id: any): Observable<any> {
  //   return this._HttpClient.get('https://fakestoreapi.com/products/' + id);
  // }

getRelatedProductsList(): Observable<any> {
  return this._HttpClient.get('https://fakestoreapi.com/products/category/' + this.category[3]+'?limit=3');
}
}
