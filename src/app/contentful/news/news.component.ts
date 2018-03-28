import { Component, OnInit } from '@angular/core';

import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    newsArticle: Entry<any>[] = [];

    constructor(private _contentfulService: ContentfulService) { }

    ngOnInit() {
        this._contentfulService.getNewsArticle()
            .then(newsArticle => this.newsArticle = newsArticle)

    }

}


