import { Component } from '@angular/core';

import { FetchDataService } from '../../../services/fetch-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  selectedProduct: any = {};
  id: any;
  products: any = [];
  constructor(public _FetchDataService: FetchDataService, public _ActivatedRoute: ActivatedRoute) {
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id");

    this._FetchDataService.getData().subscribe((data) => {
      this.selectedProduct = data[this.id];
      console.log("selected product", this.selectedProduct);
    }
    );

    this._FetchDataService.getData().subscribe((data) => {
      this.products.push(data[1] , data[2] , data[3]);
    });



  }



}
