import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListFilteredByCategoryComponent } from './product-list-filtered-by-category.component';

describe('ProductListFilteredByCategoryComponent', () => {
  let component: ProductListFilteredByCategoryComponent;
  let fixture: ComponentFixture<ProductListFilteredByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListFilteredByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListFilteredByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
