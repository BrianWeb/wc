import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful/contentful.service';

@Component({
    selector: 'pm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})

export class AppComponent {
    title: string = 'Wood Concepts';


    constructor(
        private ContentfulService: ContentfulService
    ) { }

    ngOnInit() {
        this.ContentfulService.onTitleChange(title => this.title = title)
    }
}
