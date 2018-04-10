import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchParams: string;
  allProducts: ProductModel[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe( response => {
      this.allProducts = response;
    });
  }

  search(): void {
    if (this.searchParams) {
      this.productService.searchProducts(this.searchParams)
      .subscribe( response => this.allProducts = response);
    } else {
      this.getProducts();
    }
  }

  removeProduct(id: number): void {
    this.productService.deleteProduct(id)
      .subscribe(() => this.getProducts());
  }

}
