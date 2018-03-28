import { Component, OnInit } from '@angular/core';

import { ContentfulService } from '../contentful.service';

import { Entry } from 'contentful';


@Component({
    templateUrl: './sustainability.component.html',
    styleUrls: ['./sustainability.component.css']
})
export class SustainabilityComponent implements OnInit {

    staticPages: Entry<any>[] = [];

    constructor(private _contentfulService: ContentfulService) { }

    // fetch data on init
    ngOnInit() {
        this._contentfulService.getStaticPages()
            .then(staticPages => this.staticPages = staticPages)
            
    }

}
 

