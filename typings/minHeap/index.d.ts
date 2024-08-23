interface IMinHeap {
  heapify: (data: Array<number>) => void;
  insert: (value: number) => void;
  deleteTop: () => void;
  peek: () => number;
}
