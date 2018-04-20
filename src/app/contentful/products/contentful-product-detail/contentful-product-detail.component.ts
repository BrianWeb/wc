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
    type1Applications: any[]; //BW code to declare a new array type of returned entries from the 'type 1 Applications' array in Contentful
    type2Applications: any[]; //BW code
    specificationsSheets: any[]; //BW code
    productImages: [any];
    showImage: boolean = false;
    bptest: string;

    // --- Gallery Variables -----
    //const expandImg = document.getElementById("expandedImg");
    //const imgText = this.imgText = document.getElementById("imgtext");


    // --- /Gallery Variables -----

    constructor(
        private ContentfulService: ContentfulService,
        private route: ActivatedRoute,
        private _router: Router // for the back button
    ) {
        this.productImages = [
            {
                fileName: 'steico_therm_application',
                brandName: 'STEICO',
                productName: 'Therm',
                productDescription: 'Rigid insulation',
                imageDescription: 'roof application',
                imageUrl: '../../../assets/carousel_images/banner_images/stecio-therm-dry.jpg',
                productUrl: 'insulation',
                keyFeature1: 'Keep Cold Out',
                keyFeature2: 'Regulate Temperature',
                keyFeature3: 'Reduce Noise',
                keyFeature4: 'Reduce Moisture',
                keyFeature5: 'Save Energy',
                keyFeature6: 'Stay Green ',
            }]
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.ContentfulService.getProduct(params.get('slug')))
            .subscribe(product => {
                this.product = product;
                //this.jsonProduct = product.fields.brand.fields.companyName;
                this.images = product.fields.image;
                this.type1Applications = product.fields.type1Applications; //populate the new type1Applications array with fields from the type1Applications array in Contentful
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
            (function (extractArrayImgUrls) {
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

    wheel(): void {
        window.alert("you're using the scroll wheel");
    }
    openDialog(): void {
        window.alert("Shithouse");
    }

    toggleImage(img) {
        this.showImage = !this.showImage;
    }


    thumbnailClicked(): void {
        this.showImage = !this.showImage;
    }


    //myFunction(imgs): void {

    // Get the expanded image

    // Get the image text

    // Use the same src in the expanded image as the image being clicked on from the grid
    //this.expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    //this.imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    //this.expandImg.parentElement.style.display = "block";
    //}
}

