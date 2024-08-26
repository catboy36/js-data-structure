import { PriorityQueue } from '../../src/core/index';

describe('PriorityQueue', () => {
  test('PriorityQueue methods', () => {
    const heap = new PriorityQueue();
    heap.equeueUp([
      { priority: 7, data: 'this is not important 7' },
      { priority: 9, data: 'this is not important 9' },
      { priority: 5, data: 'this is not important 5' },
      { priority: 10, data: 'this is not important 10' },
      { priority: 1, data: 'this is important 1' },
      { priority: 2, data: 'this is important 2' },
    ]);
    expect(heap.peek()).toEqual('this is important 1');
    heap.enqueue({ priority: 0, data: 'this is important 0' });
    heap.enqueue({ priority: 2, data: 'this is important 2' });
    expect(heap.peek()).toEqual('this is important 0');
    heap.dequeue();
    heap.dequeue();
    heap.dequeue();
    expect(heap.peek()).toEqual('this is important 2');
  });
});
