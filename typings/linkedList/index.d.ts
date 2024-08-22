interface IListNode {
  value: any;
  next: IListNode | null;
}

interface ILinkedList {
  appendNode: (value: any) => void;
  insertAt: (position: number, value: any) => void;
  removeAt: (position: number) => IListNode | null;
  removeNode: (value: any) => IListNode | null;
  removeHead: () => IListNode | null;
  removeLast: () => IListNode | null;
  indexOf: (value: any) => number;
  isEmpty: () => boolean;
  getHead: () => IListNode | null;
  getLast: () => IListNode | null;
  size: () => number;
}
