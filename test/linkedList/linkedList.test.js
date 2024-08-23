import { LinkedList } from '../../src/core/index';

describe('LinkedList', () => {
  test('LinkedList methods', () => {
    const linkedList = new LinkedList();
    linkedList.appendNode(3);
    linkedList.appendNode(4);
    linkedList.appendNode(5);
    expect(linkedList.getHead().value).toBe(3);
    expect(linkedList.getLast().value).toBe(5);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.indexOf(4)).toBe(1);
    linkedList.insertAt(2, 6);
    expect(linkedList.indexOf(6)).toBe(2);
    linkedList.removeHead();
    expect(linkedList.getHead().value).toBe(4);
    linkedList.removeLast();
    expect(linkedList.getLast().value).toBe(6);
    expect(linkedList.size()).toBe(2);
    expect(linkedList.removeNode(4).value).toBe(4);
    expect(linkedList.size()).toBe(1);
  });
});
