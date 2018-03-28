import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import { ContentfulService } from '../../contentful.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; //Router is just for the back button
import { Entry } from 'contentful';

import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable'; //bw code
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';


@Component({
    selector: 'app-contentful-product-detail',
    templateUrl: './contentful-product-detail.component.html',
    styleUrls: ['./contentful-product-detail.component.css']
})

export class ContentfulProductDetailComponent implements OnInit {
    product: Entry<any>;
    errorMessage: string; //BW/DK code
    images: any[]; //BW code
    type1Applications: any[]; //BW code
    type2Applications: any[]; //BW code
    specificationsSheets: any[]; //BW code


    constructor(
        private ContentfulService: ContentfulService,
        private route: ActivatedRoute,
        private _router: Router // for the back button
    ) { }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.ContentfulService.getProduct(params.get('slug')))
            .subscribe(product => {
                this.product = product;
                //this.jsonProduct = product.fields.brand.fields.companyName;
                this.images = product.fields.image;
                this.type1Applications = product.fields.type1Applications;
                this.type2Applications = product.fields.type2Applications;
                this.specificationsSheets = product.fields.specificationsSheet;
            },
            error => this.errorMessage = <any>error);


    }

    //imagesArrayImageUrls: any[];
    /*
    var
    forecasts = [
        { day: 'monday', sun: true, hum: 10 },
        { day: 'tue', sun: false, hum: 100 },
        { day: 'wed', sun: false, hum: 100 },
        { day: 'thur', sun: true, hum: 25 },
        { day: 'fri', sun: false, hum: 10 },
        { day: 'sat', sun: true, hum: 15 },
        { day: 'sunday', sun: false, hum: 10 },
    ];

    getIm2() {
        var newArray2 = this.forecasts.map
            (function (extractArrayImgUrls)
            {
                return extractArrayImgUrls.hum;
            })
        console.log(newArray2);
    }*/

    getImages() {
        var newArray = this.images.map
            (function (extractArrayImgUrls)
            {
                return extractArrayImgUrls.fields.file.url;
            })
    }

    getType1Applications() {
        var newArray = this.type1Applications.map
            (function (extractArrayType1Applications) {
                return extractArrayType1Applications.fields.applicationTypeInstance;
            })
    }

    getType2Applications() {
        var newArray = this.type2Applications.map
            (function (extractArrayType2Applications) {
                return extractArrayType2Applications.fields.applicationTypeInstance;
            })
    }

    getSpecificationsSheetTitles() {
        var newArray = this.specificationsSheets.map
            (function (extractArraySpecificationsSheets) {
                return extractArraySpecificationsSheets.fields.title;
            })
    }

    getSpecificationsSheetUrls() {
        var newArray = this.specificationsSheets.map
            (function (extractArraySpecificationsSheets) {
                return extractArraySpecificationsSheets.fields.file.url;
            })
    }

    /*
    getImageUrls(imagesArrayImageUrls) {
   
        //console.log('All: ' + JSON.stringify(this.imagesArray));

        this.images.forEach(function (anyEntry) {
          imagesArrayImageUrls = anyEntry.fields.file.url
            
            return anyEntry;
        });
        console.log('Image URL is :' + imagesArrayImageUrls);
        //let newArray = imagesArrayImageUrls.map(function (noSure) {
            //return 12;
        //console.log('new array= ' + newArray);      
        
       // this.jsonProduct.forEach(function () { console.log("shittycake") });
    }*/

    // for the back button:
    onBack(): void {
        this._router.navigate(['/products']);
    }

 
}
