import { ProductModel } from './product.model';

export class InventoryItemModel {
  product: ProductModel;
  remainingCount: number;
  minimumRequired: number;

  constructor(product: ProductModel) {
    this.product = product;
    this.remainingCount = 0;
    this.minimumRequired = 1;
  }

  addProduct(count: number): void {
    this.remainingCount = this.remainingCount + count;
  }

  removeProduct(count: number): void {
    if (this.remainingCount > 0) {
      this.remainingCount = this.remainingCount - count;
    }
  }

  requireShopping(): boolean {
    if (this.remainingCount < this.minimumRequired) {
      return true;
    } else {
      return false;
    }
  }
}
