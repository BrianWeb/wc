//Angular's Components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //for NGPrime
import { FormsModule } from '@angular/forms';

//My Custom Components:
import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SharedModule } from './shared/shared.module';

import { ProductModule } from './products/product.module';
import { ProductMenuComponent } from './products/product-menu.component';
import { ProductFilterPipe } from './products/product-filter.pipe';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//Third Party Components:
//https://github.com/dimpu/ngx-md
import { MarkdownModule } from 'angular2-markdown';


//PrimeNG
//import { CarouselModule } from 'primeng/primeng';

//ng-bootstrap.github.io
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import ProductListComponent to for:   path: 'welcome', component: WelcomeComponent, children: [{ path: '', component: ProductListComponent }]  },
import { ProductListComponent } from './products/product-list.component';

//Component's whose data comes from Contentful:
import { ProductListFilteredByCategoryComponent } from './products/product-list/product-list-filtered-by-category.component';
import { ContentfulService } from './contentful/contentful.service';
import { ContentfulProductListComponent } from './contentful/products/contentful-product-list/contentful-product-list.component';
import { ContentfulProductDetailComponent } from './contentful/products/contentful-product-detail/contentful-product-detail.component';
import { ContentfulCategoryListComponent } from './contentful/products/contentful-category-list/contentful-category-list.component';
import { ContentfulProductListBySubCategory1Component } from './contentful/products/contentful-product-list-by-sub-category1/contentful-product-list-by-sub-category1.component';
import { ContentfulProductListBySubCategory2Component } from './contentful/products/contentful-product-list-by-sub-category2/contentful-product-list-by-sub-category2.component';
import { SustainabilityComponent } from './contentful/sustainability/sustainability.component';
import { NewsComponent } from './contentful/news/news.component';


import { ContactFormComponent } from './contact/contact-form/contact-form.component';

import { RouteoneComponent } from './routeone/routeone.component';
import { RoutetwoComponent } from './routetwo/routetwo.component';

//Clarity
//import { ClarityModule } from "@clr/angular";



@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        FooterComponent,
        ProductMenuComponent,
        ProductFilterPipe,
        AboutComponent,
        SustainabilityComponent,
        ContactComponent,
        CarouselComponent,
        ProductListFilteredByCategoryComponent,
        ContentfulProductListComponent,
        ContentfulProductDetailComponent,
        ContentfulCategoryListComponent,
        ContentfulProductListBySubCategory1Component,
        ContentfulProductListBySubCategory2Component,
        NewsComponent,
        ContactFormComponent,
        RouteoneComponent,
        RoutetwoComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule.forRoot(),
        MarkdownModule.forRoot(), //https://github.com/dimpu/ngx-md
        RouterModule.forRoot([
            //{ path: 'welcome', component: WelcomeComponent, children: [{ path: '', component: ProductListComponent }]  },
            { path: 'welcome', component: WelcomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'sustainability', component: SustainabilityComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'news', component: NewsComponent },

            { path: 'dk', component: ProductListComponent },
            //----contentful:

            { path: 'products', component: ContentfulCategoryListComponent },
            { path: 'products/:slug', component: ContentfulProductDetailComponent },
            { path: 'categories', component: ContentfulCategoryListComponent },
            { path: ':subcategory2slug', component: ContentfulProductListBySubCategory2Component },
            //----/contentful

            { path: 'plural', component: ProductListComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            //{ path: '**', redirectTo: 'welcome', pathMatch: 'full' } always put this last because according to https://angular.io/guide/router ,'The router will select this route if the requested URL doesn't match any paths for routes defined EARLIER in the configuration.' So putting it before the end means it won't check the routes after it
            { path: 'routeone', component: RouteoneComponent },
            { path: 'routetwo', component: RoutetwoComponent },
            { path: '**', redirectTo: '/routetwo' }

        ]),
        FormsModule,
        ProductModule,
        SharedModule,

        //PrimeNG:
        //BrowserAnimationsModule,
        //CarouselModule,

        // ClarityModule, Clarity

        //ng-bootstrap.github.io:
        NgbModule.forRoot()
    ],

    //exports below is just for Contenful
    exports: [],

    // make the providers available in the application
    providers: [ContentfulService],

    bootstrap: [AppComponent]
})
export class AppModule { }
