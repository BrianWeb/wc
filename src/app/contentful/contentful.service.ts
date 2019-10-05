import { Injectable } from '@angular/core';

import { createClient, Entry, Space, ContentfulClientApi  } from 'contentful';


// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here


const DEFAULT_CONFIG = {

  credentials: {
    space: '7eb1rnj7pxnc',
    accessToken: '3da7e542a8d7f75a15c270d4d1d96775c976216f8ce982b4ba953a5f33636381',
  },

  contentTypeIds: {
    product: '2PqfXUJwE8qSYKuM0U6w8M',
    category: 'category',
    staticPage: 'staticPage',
    newsArticle: 'newsArticle'
   // subCategory1: 'subCategory1'
  }
}

@Injectable()
export class ContentfulService
{

  //define the Contentful client in your service class :
  cdaClient: ContentfulClientApi;
  config: {
    space: string,
    accessToken: string
  };
  titleHandlers: Function[]

  /*add a new method called getProducts.
  This method will fetch the data using the getEntries method of the SDK client.
  You can set the content_type property inside of the query object with the
  product content type id to only retrieve products.*/

  constructor() {
    try {
      this.config = JSON.parse(localStorage.catalogConfig);
    } catch (e) {
      this.config = DEFAULT_CONFIG.credentials;
    }

    this.titleHandlers = [];
    this._createClient();
    this.getSpace();
  }

  onTitleChange(fn): void {
    this.titleHandlers.push(fn)
  }

  // get the current space
  getSpace(): Promise<Space> {
    return this.cdaClient.getSpace()
      .then(space => {
        this.titleHandlers.forEach(handler => handler(space.name))

        return space;
      })
  }

  // fetch products
  getProducts(query?: object): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries(Object.assign({
          content_type: DEFAULT_CONFIG.contentTypeIds.product}, query))
          .then(res => res.items);

  }
  /*getEntries returns a promise which will be resolved with meta information
  like the total number of fetched entries but also an Array of items
  which includes the actual products you're interested in.*/


  getProductsToJson(query?: object): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries(Object.assign({ content_type: DEFAULT_CONFIG.contentTypeIds.product }, query))

          .then(res => res.items);

            }


//below code by BW - getStaticPages, which uses the same code as above, in getProducts
  getStaticPages(query?: object): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries(Object.assign({ content_type: DEFAULT_CONFIG.contentTypeIds.staticPage }, query))
          .then(res => res.items);
  }


  //below code by BW - getNews, which uses the same code as above, in getProducts
  getNewsArticle(query?: object): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries(Object.assign({ content_type: DEFAULT_CONFIG.contentTypeIds.newsArticle }, query))
          .then(res => res.items);
  }


   //below code by BW - get Applications, which uses the same code as above, in getProducts
getApplications(query ?: object): Promise < Entry < any > [] > {
    return this.cdaClient.getEntries(Object.assign({ content_type: DEFAULT_CONFIG.contentTypeIds.product }, query))
        .then(res => res.items);
}



//bw code for assets:
  getProductImages(query?: object): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries(Object.assign({ content_type: DEFAULT_CONFIG.contentTypeIds.staticPage }, query))
          .then(res => res.items);
  }

  // fetch products with a given slug
  // and return one of them
  getProduct(slug: string): Promise<Entry<any>> {
      return this.getProducts({ 'fields.slug': slug })
          .then(items => items[0])
  }


//bw code:
  // fetch products with a given slug
  // and return one of them
  
  getProductBySubCategory1(subcategory1slug: string): Promise<Entry<any>> {
      return this.getProducts({ 'fields.subCategory1.fields.slug': subcategory1slug })
          .then(items => items[0])

  }

    //this one is working with tags:
  getProductBySubCategory2(subcategory2slug: string): Promise<Entry<any>[]> {
      //return this.getProducts({ 'fields.subCategory2.fields.slug': subcategory2slug})
      return this.getProducts({ 'fields.tags': subcategory2slug })
          .then(items => items)
  }


  //this one is working with tags:
  getProductApplications(applicationsType1Instance: string): Promise<Entry<any>[]> {
      return this.getProducts({ 'fields.applicationsType1Instance': applicationsType1Instance })
          .then(items => items)
  }


  // fetch categories
  getCategories(): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries({
          content_type: 'category',
          order: 'fields.order'
      })
          .then(res => res.items);
  }

    


 
  // return a custom config if available
  getConfig(): { space: string, accessToken: string } {
    return this.config !== DEFAULT_CONFIG.credentials ?
      Object.assign({}, this.config) :
      { space: '', accessToken: '' };
  }

  // set a new config and store it in localStorage
  setConfig(config: { space: string, accessToken: string }) {
    localStorage.setItem('catalogConfig', JSON.stringify(config));
    this.config = config;

    this._createClient();
    this.getSpace();

    return Object.assign({}, this.config);
  }

  // set config back to default values
  resetConfig() {
    localStorage.removeItem('catalogConfig');
    this.config = DEFAULT_CONFIG.credentials;

    this._createClient();
    this.getSpace();

    return Object.assign({}, this.config);
  }

  _createClient() {
    this.cdaClient = createClient({
      space: this.config.space,
      accessToken: this.config.accessToken
    });
  }
}
