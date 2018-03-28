import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentfulCategoryListComponent } from './contentful-category-list.component';

describe('ContentfulCategoryListComponent', () => {
  let component: ContentfulCategoryListComponent;
  let fixture: ComponentFixture<ContentfulCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentfulCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentfulCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
