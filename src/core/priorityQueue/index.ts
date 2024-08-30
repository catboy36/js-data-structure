export default class PriorityQueue implements IPriorityQueue {
  private queue: Array<PriorityData>;

  constructor() {
    this.queue = [];
  }

  equeueUp(data: Array<PriorityData>) {
    const length = data.length;
    if (length) {
      for (let i = 0; i < length; i++) {
        this.enqueue(data[i]);
      }
    }
  }

  enqueue(value: PriorityData) {
    this.queue.push(value);
    this.shiftUp(this.queue.length - 1);
  }

  private shiftDown(index: number) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let smallest = index;
    if (left < this.queue.length && this.queue[left].priority < this.queue[smallest].priority) {
      smallest = left;
    }
    if (right < this.queue.length && this.queue[right].priority < this.queue[smallest].priority) {
      smallest = right;
    }
    if (smallest !== index) {
      [this.queue[index], this.queue[smallest]] = [this.queue[smallest], this.queue[index]];
      this.shiftDown(smallest);
    }
  }

  private shiftUp(index: number) {
    const parent = (index - 1) >> 1;
    if (parent >= 0 && this.queue[index].priority < this.queue[parent].priority) {
      [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
      this.shiftUp(parent);
    }
  }

  dequeue(): any {
    const last = this.queue.pop();
    const head = this.peek() || last?.data;
    if (this.queue.length > 0) {
      this.queue[0] = last!;
      this.shiftDown(0);
    }
    return head;
  }

  peek(): any {
    return this.queue[0]?.data;
  }
}
