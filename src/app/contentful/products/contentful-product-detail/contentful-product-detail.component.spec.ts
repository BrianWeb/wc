import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentfulProductDetailComponent } from './contentful-product-detail.component';

describe('ContentfulProductDetailComponent', () => {
  let component: ContentfulProductDetailComponent;
  let fixture: ComponentFixture<ContentfulProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentfulProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentfulProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
