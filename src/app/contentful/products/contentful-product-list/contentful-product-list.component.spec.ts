import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentfulProductListComponent } from './contentful-product-list.component';

describe('ContentfulProductListComponent', () => {
  let component: ContentfulProductListComponent;
  let fixture: ComponentFixture<ContentfulProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentfulProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentfulProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
