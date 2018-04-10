import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { map, filter } from 'rxjs/operators';

import { InventoryItemModel } from '../models/inventory-item.model';
import { ProductModel } from '../models/product.model';

import { environment } from '../../environments/environment';

@Injectable()
export class InventoryService {
  inventoryItems: InventoryItemModel[];

  constructor() {
    this.inventoryItems = [];
  }

  addProduct(product: ProductModel): void {
    let invItem: InventoryItemModel;
    let foundItem: InventoryItemModel[];

    foundItem = this.inventoryItems.filter(
      inv => inv.product.code === product.code
    );

    if (foundItem && foundItem.length > 0) {
      foundItem[0].addProduct(1);
    } else {
      invItem = new InventoryItemModel(product);
      this.inventoryItems.push(invItem);
    }
  }

  removeProduct(product: ProductModel): void {}

  getProducts(): Observable<InventoryItemModel[]> {
    return of(this.inventoryItems);
  }
}
