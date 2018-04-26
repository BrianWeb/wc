import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  emailAddress = '&#116;&#109;&#115;&#64;&#116;&#109;' + '&#115;&#46;&#105;&#101';
}
