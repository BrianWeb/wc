import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful/contentful.service';
import { Router, NavigationEnd } from "@angular/router";  //just for Google Analytics to record every route change and sent it back to Google as a page view. For more info, see https://codeburst.io/using-google-analytics-with-angular-25c93bffaa18


@Component({
    selector: 'pm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})

export class AppComponent {
    title: string = 'Wood Concepts';


    constructor(
        private ContentfulService: ContentfulService,
        private router: Router //just for Google Analytics to record every route change and sent it back to Google as a page view
    ) { 
     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }
    sendEvent = () => {
        (<any>window).ga('send', 'event', {
            eventCategory: 'eventCategory',
            eventLabel: 'eventLabel',
            eventAction: 'eventAction',
            eventValue: 10
        });
    }
    ngOnInit() {
        this.ContentfulService.onTitleChange(title => this.title = title)
    }
}
