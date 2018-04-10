import { ProductModel } from './product.model';

describe('A product model', () => {
  const code = 'codetest';
  const name = 'nametest';

  beforeEach(() => {

  });

  it('contains a code and name', () => {
    this.prod = new ProductModel(this.code, this.name);

    expect(this.prod).not.toBe(null);
    expect(this.prod.name).toBe(this.name);
    expect(this.prod.code).toBe(this.code);
  });
});
