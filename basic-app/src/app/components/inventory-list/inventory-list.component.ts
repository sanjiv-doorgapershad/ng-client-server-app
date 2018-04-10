import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { InventoryItemModel } from '../../models/inventory-item.model';

import { InventoryService } from '../../services/inventory.service';

@Component({
    selector: 'app-inventory-list',
    templateUrl: './inventory-list.component.html',
    styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
    products: InventoryItemModel[];

    constructor(private inventorySvc: InventoryService) {
    }

    ngOnInit() {
        this.inventorySvc.getProducts()
        .subscribe(products => {
            this.products = products;
        });
    }


}
