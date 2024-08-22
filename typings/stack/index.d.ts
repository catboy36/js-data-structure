interface IStack {
  pop: () => any;
  push: (data: any) => void;
  peek: () => any;
  isEmpty: () => boolean;
  clear: () => void;
  size: () => number;
}
