declare interface IStack {
  pop: () => any;
  push: (data: any) => void;
  peek: () => any;
}
