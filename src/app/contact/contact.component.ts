import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  emailAddress = '&#116;&#109;&#115;&#64;&#116;&#109;' + '&#115;&#46;&#105;&#101';
}
