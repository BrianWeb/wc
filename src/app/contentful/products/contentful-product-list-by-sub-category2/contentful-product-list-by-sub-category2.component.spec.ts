import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentfulProductListBySubCategory2Component } from './contentful-product-list-by-sub-category2.component';

describe('ContentfulProductListBySubCategory2Component', () => {
  let component: ContentfulProductListBySubCategory2Component;
  let fixture: ComponentFixture<ContentfulProductListBySubCategory2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentfulProductListBySubCategory2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentfulProductListBySubCategory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
