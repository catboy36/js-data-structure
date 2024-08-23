import { MinHeap } from '../../src/core/index';

describe('MinHeap', () => {
  test('MinHeap methods', () => {
    const heap = new MinHeap();
    heap.heapify([8, 5, 6, 3, 9, 10, 4]);
    expect(heap.peek()).toEqual(3);
    heap.insert(11);
    heap.insert(2);
    expect(heap.peek()).toEqual(2);
    heap.deleteTop();
    heap.deleteTop();
    heap.deleteTop();
    expect(heap.peek()).toEqual(5);

  });
});
