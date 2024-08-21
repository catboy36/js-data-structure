import { Stack } from '../../src/core/index';

describe('Stack', () => {
  test('stack methods', () => {
    const stack = new Stack();
    stack.push(2);
    expect(stack.size()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toEqual(2);
    expect(stack.pop()).toBe(2);
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    stack.push(3);
    stack.push(4);
    expect(stack.size()).toBe(2);
    stack.clear();
    expect(stack.size()).toBe(0);
  });
});
