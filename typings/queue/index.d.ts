interface IQueue {
    enqueue: (data: any) => void;
    dequeue: () => any;
    peek: () => any;
    isEmpty: () => boolean;
    clear: () => void;
    size: () => number;
  }
  