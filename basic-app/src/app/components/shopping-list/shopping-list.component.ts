import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../../services/inventory.service';
import { InventoryItemModel } from '../../models/inventory-item.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    requiredProducts: InventoryItemModel[] = [];

    constructor(private inventorySvc: InventoryService) {

    }

    ngOnInit() {
        this.inventorySvc.getProducts()
        .subscribe(products => this.requiredProducts = products);
    }

}
