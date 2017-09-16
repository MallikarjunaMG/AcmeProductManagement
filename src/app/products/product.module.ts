import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ProductGaurdService } from "./product-gaurd.service";
import { ProductService } from "./product.service";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ConverToSpacesPipe } from "../shared/conver-to-spaces.pipe";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConverToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGaurdService],
        component: ProductDetailComponent },
    ]),
    SharedModule
  ],
  providers: [
    ProductGaurdService,
    ProductService
  ]
})
export class ProductModule { }
