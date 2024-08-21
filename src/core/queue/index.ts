export default class Queue implements IQueue {
  private queue: Array<any>;
  constructor() {
    this.queue = [];
  }

  enqueue(data: any) {
    this.queue.push(data);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  clear() {
    this.queue = [];
  }

  size() {
    return this.queue.length;
  }
}
