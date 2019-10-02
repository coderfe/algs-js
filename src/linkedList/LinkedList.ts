class LinkedListNode<T> {
  public value: T;
  public next: LinkedListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList<T> {
  private count: number;
  private head: LinkedListNode<T>;

  constructor() {
    this.head = null;
    this.count = 0;
  }

  push(element: T) {
    const node = new LinkedListNode(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(element: T, position: number) {
    if (!this.isValidIndex(position)) return false;

    const node = new LinkedListNode(element);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const current = this.getElementAt(position);
      node.next = current.next;
      current.next = node;
    }
    this.count++;
    return true;
  }

  removeAt(position: number) {
    if (!this.isValidIndex(position)) return false;

    if (position === 0) {
      this.head = this.head.next;
    } else {
      const preview = this.getElementAt(position - 1);
      const current = preview.next;
      preview.next = current.next;
    }
    this.count--;
    return true;
  }

  remove(element: T) {
    return this.removeAt(this.indexOf(element));
  }

  indexOf(element: T) {
    let node = this.head;
    for (let i = 0; i < this.count && node !== null; i++) {
      if (element === node.value) {
        return i;
      }
      node = node.next;
    }
    return -1;
  }

  getElementAt(index: number) {
    if (!this.isValidIndex(index)) return;
    let node = this.head;
    for (let i = 0; i < index && node !== null; i++) {
      node = node.next;
    }
    return node;
  }

  getHead() {
    return this.head;
  }

  private isValidIndex(index: number) {
    return index >= 0 && index <= this.count;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }
}
