import { Pipe, PipeTransform } from '@angular/core';

import { InventoryItemModel } from '../../models/inventory-item.model';

@Pipe({
    name: 'ShoppingListFilter',
    pure: false
})
export class ShoppingListFilterPipe implements PipeTransform {
    transform(items: InventoryItemModel[]): InventoryItemModel[] {
        if (!items) {
            return items;
        }

        return items.filter((item: InventoryItemModel) => item.requireShopping());
    }
}
