import { Stack } from '@/core/index';
describe('Stack', () => {
  test('stack methods', () => {
    const stack = new Stack();
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
  });
});
