export default class MinHeap implements IMinHeap {
  private heap: Array<number>;

  constructor() {
    this.heap = [];
  }

  heapify(data: Array<number>) {
    const length = data.length;
    if (length) {
      for (let i = 0; i < length; i++) {
        this.insert(data[i]);
      }
    }
  }

  insert(value: number) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  private shiftDown(index: number) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let smallest = index;
    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.shiftDown(smallest);
    }
  }

  private shiftUp(index: number) {
    const parent = (index - 1) >> 1;
    if (parent >= 0 && this.heap[index] < this.heap[parent]) {
      [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
      this.shiftUp(parent);
    }
  }

  deleteTop() {
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last!;
      this.shiftDown(0);
    }
  }

  peek(): number {
    return this.heap[0];
  }
}
