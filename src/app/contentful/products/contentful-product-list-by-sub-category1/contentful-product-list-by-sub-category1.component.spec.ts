import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentfulProductListBySubCategory1Component } from './contentful-product-list-by-sub-category1.component';

describe('ContentfulProductListBySubCategory1Component', () => {
  let component: ContentfulProductListBySubCategory1Component;
  let fixture: ComponentFixture<ContentfulProductListBySubCategory1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentfulProductListBySubCategory1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentfulProductListBySubCategory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
