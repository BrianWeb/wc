/// <reference path="product.interface.ts" />
import { PipeTransform, Pipe } from '@angular/core';

import { IProduct } from './product.interface';

@Pipe( {
  name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform { //(Angular's PipeTransform Interface)

  //method:
  transform(value: IProduct[], filterBy: string): IProduct[] {
    //take IProduct array, filter it by a string, and then return a new array of IProduct

    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    //JS Conditional operator to handle the possible that no filter string was defined.
    //if there is a filter by, this code converts it to lower case.
    //If there is no filter by, then set filter by to null

    return filterBy ? value.filter((product: IProduct) =>
      //return filtered list of products
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;

  }

}
