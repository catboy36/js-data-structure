class ListNode implements IListNode {
  value: any;
  next: IListNode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList implements ILinkedList {
  head: IListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }
  appendNode(value: any): void {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length++;
  }
  insertAt(position: number, value: any): void {
    const node = new ListNode(value);
    if (position <= 0 || !this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      let cur = this.head;
      let index = 0;
      while (cur.next && index < position - 1) {
        cur = cur.next;
        index++;
      }
      node.next = cur.next;
      cur.next = node;
    }
    this.length++;
  }
  removeAt(position: number): IListNode | null {
    if (!this.head || position < 0 || position > this.length - 1) {
      return null;
    }
    let cur = this.head;
    let index = 0;
    if (position === 0) {
      this.head = cur.next;
    } else {
      let prev = null;
      while (index < position) {
        prev = cur;
        cur = cur.next!;
      }
      prev!.next = cur.next;
    }
    this.length--;
    return cur;
  }
  removeNode(value: any): IListNode | null {
    let index = this.indexOf(value);
    return this.removeAt(index);
  }
  removeHead(): IListNode | null {
    return this.removeAt(0);
  }
  removeLast(): IListNode | null {
    return this.removeAt(this.length - 1);
  }
  indexOf(value: any): number {
    let cur = this.head;
    let index = 0;
    while (cur) {
      if (value === cur.value) {
        return index;
      }
      index++;
      cur = cur.next;
    }
    return -1;
  }
  isEmpty(): boolean {
    return this.length === 0;
  }
  getHead(): IListNode | null {
    return this.head;
  }
  getLast(): IListNode | null {
    let cur = this.head;
    while (cur?.next) {
      cur = cur.next;
    }
    return cur;
  }
  size(): number {
    return this.length;
  }
}
