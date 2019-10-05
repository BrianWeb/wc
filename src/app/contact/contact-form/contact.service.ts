
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable ,  of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};


@Injectable()
export class ContactService {

    constructor() { }

    //////// Save methods //////////

    /** POST: add a new hero to the database */
  
    }





