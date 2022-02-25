const ProductService = require('../product_service.js');
const StubProductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService = null;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('shoud filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ items: 'Milk', available: true }]);
  });
});
