const Stack = require('../stack');

describe('Stack', () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('allow to push item', () => {
    stack.push('hello');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('thorows an error if stack is empty', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item and removes it from the stack', () => {
      stack.push('one');
      stack.push('two');

      expect(stack.pop()).toBe('two');
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('thorows an error if stack is empty', () => {
      expect(() => {
        stack.peek();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item but keep it in the stack', () => {
      stack.push('one');
      stack.push('two');

      expect(stack.peek()).toBe('two');
      expect(stack.size()).toBe(2);
    });
  });
});
