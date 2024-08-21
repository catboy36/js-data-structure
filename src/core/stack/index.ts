export default class Stack implements IStack {
  private stack: Array<any>;
  constructor() {
    this.stack = [];
  }

  push(data: any) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  clear() {
    this.stack = [];
  }

  size() {
    return this.stack.length;
  }
}
