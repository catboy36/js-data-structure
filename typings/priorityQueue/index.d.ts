type PriorityData = {
  data: any;
  priority: number;
};

interface IPriorityQueue {
  equeueUp: (data: Array<PriorityData>) => void;
  enqueue: (data: PriorityData) => void;
  dequeue: () => any;
  peek: () => any;
}
