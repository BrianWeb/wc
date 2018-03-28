import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list-filtered-by-category',
  templateUrl: './product-list-filtered-by-category.component.html',
  styleUrls: ['./product-list-filtered-by-category.component.css']
})
export class ProductListFilteredByCategoryComponent implements OnInit {


  constructor(private _route: ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('category2'));
  }




  ngOnInit() {
  }

}
