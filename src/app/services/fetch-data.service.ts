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
  constructor(public _HttpClient: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjE2NjA3NjM3Njl9.oOktfLlZXp2nJPuQkYaEJY0iHqukuiEpRDfVU4odvOB06zmFF0823oagrTBnQM9iYjN9Gsq_1y0_Ao_G_tKVJg'
      );
  }

  getData(): Observable<any> {
    console.log(
      '🚀 ~ file: fetch-data.service.ts ~ line 25 ~ FetchDataService ~ constructor ~   this.headers',
      this.headers
    );
    return this._HttpClient.get(
      'https://clothing-store55.herokuapp.com/c/GetProducts',
      {
        headers: this.headers,
      }
    );
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
