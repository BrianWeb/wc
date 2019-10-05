
import {switchMap} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';


import { ContentfulService } from '../../contentful.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; //Router is just for the back button
import { Entry } from 'contentful';


@Component({
  //  selector: 'app-contentful-product-list-by-sub-category1',
    templateUrl: './contentful-product-list-by-sub-category1.component.html',
    styleUrls: ['./contentful-product-list-by-sub-category1.component.css']
})


export class ContentfulProductListBySubCategory1Component implements OnInit {

    // define private class properties

    products: Entry<any>[] = [];
    constructor(
        //adding the Contentful Service with dependancy injection:
        private ContentfulService: ContentfulService,
        private route: ActivatedRoute,
        private _router: Router // for the back button

    ) { }

    ngOnInit() {

        this.route.paramMap.pipe(
            switchMap((params: ParamMap) => this.ContentfulService.getProductBySubCategory2(params.get('subcategory2slug'))))
            .subscribe(products => this.products = products);



        console.log(window.location.href);
        console.log("test");

    }



    //BW code  -doesn't work:
    /*
    subCategory1s: Entry<any>[];
    productsForSubCategory1s: {} = {};

    constructor(private contentfulService: ContentfulService) { }

    ngOnInit() {

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
      
    }*/
}
