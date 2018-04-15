import { Component, OnInit } from '@angular/core';

import { ContentfulService } from '../../contentful.service';
import { Entry } from 'contentful';

import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; //ActivedRoute is to read URL. Router is just for the back button


@Component({
  selector: 'app-contentful-product-list-by-sub-category2',
  templateUrl: './contentful-product-list-by-sub-category2.component.html',
  styleUrls: ['../contentful-category-list/contentful-category-list.component.css']
})
export class ContentfulProductListBySubCategory2Component implements OnInit {
    searchField: string;
    searchParam: string;

  // define private class properties
  products: Entry<any>[] = [];

  //adding the Contentful Service with dependancy injection:
  constructor(private contentfulService: ContentfulService,


      private route: ActivatedRoute, // added to read URL
      private _router: Router, // for the back button
      
      
  ) { }


  // fetch data on init
  ngOnInit() {
      //2 lines below work:

     // this.searchParam = 'Panel Products > Plywood > Softwood';
      //this.contentfulService.getProducts({ " 'fields.categories' + [0] + '.fields.title' " : this.searchParam })
     //     .then(products => this.products = products)

      this.route.paramMap
          .switchMap((params: ParamMap) => this.contentfulService.getProductBySubCategory2(params.get('subcategory2slug')))
          .subscribe(products => this.products = products);

      console.log(window.location.href);
  }

}/*
this.route.paramMap
    .switchMap((params: ParamMap) => this.ContentfulService.getProduct(params.get('slug')))
    .subscribe(product => this.product = product);

this.route.paramMap
    .switchMap((params: ParamMap) => this.ContentfulService.getProductBySubCategory1(params.get('subcategory1slug')))
    .subscribe(product => this.product = product);

console.log(window.location.href);
console.log("test");
*/


