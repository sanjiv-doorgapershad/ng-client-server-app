import { InventoryItemModel } from './inventory-item.model';
import { ProductModel } from './product.model';

describe('An InventoryItemModel', () => {
  let prod: ProductModel;
  let code: string;
  let name: string;

  beforeEach(() => {
    code = 'testCode';
    name = 'testName';
    prod = new ProductModel(code, name);
  });

  it('will contain a product', () => {
    expect(prod).not.toBe(null);
  });
});
