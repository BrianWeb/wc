
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {map, tap, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';





import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl = 'assets/products.json';

    constructor(private _http: HttpClient) { }

    
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError),);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts().pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id)));
    }
    
    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return observableThrowError(errorMessage);
    }
}

