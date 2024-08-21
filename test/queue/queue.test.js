import { Queue } from '../../src/core/index';

describe('Queue', () => {
  test('queue methods', () => {
    const queue = new Queue();
    queue.enqueue(2);
    expect(queue.size()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toEqual(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.size()).toBe(2);
    queue.clear();
    expect(queue.size()).toBe(0);
  });
});
