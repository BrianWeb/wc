
import { Component, OnInit } from '@angular/core';

import { ContentfulService } from '../../contentful.service';
import { Entry } from 'contentful';



@Component({
  selector: 'app-contentful-category-list',
  templateUrl: './contentful-category-list.component.html',
  styleUrls: [ './contentful-category-list.component.css']
})
export class ContentfulCategoryListComponent implements OnInit {
  categories: Entry<any>[];
  productsForCategories: {} = {};
  //BW code:
  subCategory1s: Entry<any>[];
  productsForSubCategory1s: {} = {};

  constructor(private contentfulService: ContentfulService){ }

  ngOnInit() {
    this.contentfulService.getCategories()
      .then(categories => {
        this.categories = categories;

        return Promise.all(this.categories.map(
          category => this.contentfulService.getProducts({
            'fields.categories.sys.id': category.sys.id
          })
        ))
      })
      .then(productListings => {
        this.categories.forEach((cat, i) => {
          this.productsForCategories[cat.sys.id] = productListings[i];
        });
          })

      //BW Code:
      /*
    this.contentfulService.getSubCategory1s()
        .then(subCategory1s => {
            this.subCategory1s = subCategory1s;

            return Promise.all(this.subCategory1s.map(
                subCategory1 => this.contentfulService.getProducts({
                    'fields.subCategory1.sys.id': subCategory1.sys.id
               })
            ))
        })
        .then(productListingsSubCat1 => {
            this.subCategory1s.forEach((subCat1, i) => {
                this.productsForSubCategory1s[subCat1.sys.id] = productListingsSubCat1[i];
            });
        })
      */
  }
  /* Set the width of the side navigation to 250px */
  openNav() {
      document.getElementById("mySidenav").style.width = "320px";
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }
}
