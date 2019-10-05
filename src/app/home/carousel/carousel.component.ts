import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {



  constructor() { }
    items = [
        /*{
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
            keyFeature6: 'Stay Green '
        },
        {
            fileName: 'steico_universal_application_2',
            brandName: 'STEICO',
            productName: 'Universal Dry',
            productDescription: 'Sarking and sheating board',
            imageDescription: 'roof application'
        },*/
        {
            fileName: 'i_joist_home',
            brandName: 'STEICO',
            productName: 'I-Joists',
            productDescription: 'For floors & roofs',
            imageDescription: 'roof application',
            image1Url: '../../../assets/carousel_images/banner_images/steico_i-joist.jpg',
            logoUrl: "../../../assets/carousel_images/banner_images/steico-logo-small.png",
            productUrl: 'i-joists',
            //adSubMessage: "Steico's latest",
            adMainMessageLine1: "Engineered Flooring", //"Innovations in ",
            adMainMessageLine2: "systems", //"Insulation",
            certLogoUrl: "../../../assets/carousel_images/banner_images/logos/steico-cert.png"

        },

        {
            fileName: 'softwood_timber_tan_e_truck',
            brandName: 'Wood Concepts',
            productName: 'Long Lengths',
            productNameCssClass: "logo-caption",
            productDescription: 'For quality & sustainability',
            imageDescription: 'Tanalised E timber',
            image1Url: "../../../assets/carousel_images/banner_images/long_lengths_small_banner_image.jpg",
            productUrl: "long-lengths",
            adSubMessage: "View our range of ",
            adMainMessageLine1: "Long Length Softwood",
            adMainMessageLine2:""
        


        }
        /*
          {
            fileName: 'softwood_timber_tan_e',
            brandName: 'Wood Concepts',
            productName: 'Tanalised-E',
            productDescription: '',
            imageDescription: 'Tanalised E timber',
            imageUrl: '../../../assets/carousel_images/banner_images/steico_i-joist.jpg',
            productUrl: 'i-joists'


        }*/
    ];
  
}
