export default class Stack implements IStack {
  stack: Array<any>;
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
}
