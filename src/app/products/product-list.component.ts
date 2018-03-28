
import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list', //used in welcome.component.html
  templateUrl: './product-list.component.html',
  styleUrls: ['../contentful/products/contentful-category-list/contentful-category-list.component.css']

})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = true;
  errorMessage: string;

 //checking when the user has changed the filtered query
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    /*When the data binding needs the value, it will call the getter and get the value.

    Every time the user modifies the value, the data binding calls the setter,
    passing in the changed value. If we want to perform some logic every time the value is changed,
    we can add it here in the setter.

   */

    set listFilter(value: string) {
        this._listFilter = value;

        //We want to set our filter products array to the filtered list of products like this.
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        /*
        Here we are using the JavaScript conditional operator to handle
        the possibility that the listFilter string is empty, null, or undefined.
        this.listFilter ? this.performFilter(this.listFilter) : this.products;
        i.e.,

        this.performFilter
        (See function below)

        this.listFilter
        If there is a listFilter value,

        this.performFilter(this.listFilter)
        this code filters on that value.

        this.products
        If the listFilter is not set, the filtered products property is assigned to the entire set of products.
        So, if there is no filter, we should display all of the products.
        */
    }


    /*
    We want to set default values for both the filtered products and the listFilter properties.
    The best place to set default values for more complex properties is in the class constructor.
    The class constructor is a function that is executed when the component is first initialized.

    We want to set the filteredProducts to the full list of products and the default listFilter
    to cart like we had earlier.
    */

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private _productService: ProductService) {

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        //This code starts by converting the filter criteria to lowercase.
        //Why? So we can compare apples to apples when we filter the product list.
        //We want a case insensitive comparison.

        // Then we return the filtered list of products:
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    /*
    this.products.filter
    We are using the array filter method to create a new array with elements that pass the
    test defined in the provided function.

    (product: IProduct) =>
    We use the ES 2015 arrow syntax to define that filter function.
    For each product in the list, the product name is converted to lowercase and
    indexOf is used to determine if the filter text is found in the product name.
    If so, the element is added to the filtered list.

    See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


    
    

    Our last step then is to change our template to bind to our filteredProducts property instead of the products property. Now let's give it a try.
    Our default filter is cart. So now we only see the garden cart.

    */

    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => {
                    this.products = products;
                    this.filteredProducts = this.products;
                },
                    error => this.errorMessage = <any>error);
  }


  /* Set the width of the side navigation to 250px */
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}

