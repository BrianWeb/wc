
import { Component, OnInit } from '@angular/core';

import { ContentfulService } from '../../contentful.service';

import { Entry } from 'contentful';

@Component({
  selector: 'app-contentful-product-list',
 templateUrl: './contentful-product-list.component.html',
  styleUrls: ['../contentful-category-list/contentful-category-list.component.css']

})
export class ContentfulProductListComponent implements OnInit {

  // define private class properties
  products: Entry<any>[] = [];

  //adding the Contentful Service with dependancy injection:
  constructor(private contentfulService: ContentfulService) { }


  // fetch data on init
  ngOnInit() {
    this.contentfulService.getProducts()
      .then(products => this.products = products)
  }

}
