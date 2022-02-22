const fetchProduct = require('../async.js');

describe('Async', () => {
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  it('async - await error', async () => {
    try {
      await fetchProduct('error');
    } catch (error) {
      expect(error).toMatch('network error');
    }
  });

  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 200,
    });
  });
  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toMatch('network error');
  });
});
