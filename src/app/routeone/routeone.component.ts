import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeone',
  template: 'routeone Works! <br/>     <a routerLink="/routeone">RouteOne</a>',
  styles: []
})
export class RouteoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
