
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


    name: string = '';
    age: number;
    found: boolean;


    email: String;
    message: String;

    constructor(private httpClient: HttpClient) { }

    onNameKeyUp(event: any) {

        this.name = event.target.value;
        this.found = false;
    }

    //httpGet:
    getProfile() {

        this.httpClient.get(`https://my-json-server.typicode.com/aria-2014/ARIAHTM/profiles/?name=${this.name}`)
            .subscribe((data: any[]) => {
                if (data.length) {
                    this.found = true;
                    this.name = data[0].name;
                    this.age = data[0].age;
                }
                console.log(data);
            })
    }

    //post profile
    postProfile() {

        this.httpClient.post(
            `https://formspree.io/brian@bweb.ie`,
            {
               name: 'test'

            }
        )
          
    }

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new User(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }


    newHero() {
        this.model = new User(42, '', '');
    }


    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    ngOnInit() {
    }



    private handleError(err) {
        // handle error
    }
}
