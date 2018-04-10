import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductModel } from '../../models/product.model';

import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    name = 'New Product';
    productCode: string;
    productName: string;
    product: ProductModel;
    exitingProductId: number;

    constructor(private productService: ProductService,
      private activatedRoute: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit() {
      this.product = new ProductModel('', '');
      this.exitingProductId = +this.activatedRoute.snapshot.paramMap.get('id');

      if (this.exitingProductId !== 0) {
        this.productService.getProduct(this.exitingProductId)
        .subscribe((resp) => this.product = resp);
      }
    }

    saveProduct(): void {
      if (this.product.id) {
        console.log('Updating product');
        this.productService.updateProduct(this.product)
        .subscribe(() => {
          console.log('Product updated...');
          this.location.back();
        });
      } else {
        console.log('Adding product');
        this.productService.addProduct(this.product)
        .subscribe(() => console.log('Product added...'));
      }
  }
}
