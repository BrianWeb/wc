import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

//bw code:


@NgModule({
  imports: [
    RouterModule.forChild([
      /*{ path: 'products', component: ProductListComponent, data: { title: 'Products - Wood Concepts' } },
      {
        path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent,
        data: { title: 'Product Detail' }
      },
      Overwritten by Contenful*/
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe

  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
