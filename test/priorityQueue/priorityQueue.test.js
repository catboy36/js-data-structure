import { PriorityQueue } from '../../src/core/index';

describe('PriorityQueue', () => {
  test('PriorityQueue methods', () => {
    const queue = new PriorityQueue();
    queue.equeueUp([
      { priority: 7, data: 'this is not important 7' },
      { priority: 9, data: 'this is not important 9' },
      { priority: 5, data: 'this is not important 5' },
      { priority: 10, data: 'this is not important 10' },
      { priority: 1, data: 'this is important 1' },
      { priority: 2, data: 'this is important 2' },
    ]);
    expect(queue.peek()).toEqual('this is important 1');
    queue.enqueue({ priority: 0, data: 'this is important 0' });
    queue.enqueue({ priority: 2, data: 'this is important 2' });
    expect(queue.peek()).toEqual('this is important 0');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.peek()).toEqual('this is important 2');
  });
});
