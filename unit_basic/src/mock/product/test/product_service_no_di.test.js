const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
jest.mock('../product_client.js');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { items: 'Milk', available: true },
    { items: 'Banana', available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService = null;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('shoud filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ items: 'Milk', available: true }]);
  });

  it('test', async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
