class StubProductClient {
  async fetchItems() {
    return [
      { items: 'Milk', available: true },
      { items: 'Banana', available: false },
    ];
  }
}

module.exports = StubProductClient;
