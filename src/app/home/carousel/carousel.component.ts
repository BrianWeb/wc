import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  items: [any];

  constructor() {
    this.items = [
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
            keyFeature6: 'Stay Green '
        },
        /*{
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
            imageUrl: '../../../assets/carousel_images/banner_images/steico_i-joist.jpg',
            productUrl: 'i-joists'


        }
    ];
  }

  ngOnInit(): void { }


}

