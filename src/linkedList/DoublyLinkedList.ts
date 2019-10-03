import LinkedList, { LinkedListNode } from './LinkedList';

class DoublyLinkedListNode<T> extends LinkedListNode<T> {
  value: T;
  prev: DoublyLinkedListNode<T>;
  next: DoublyLinkedListNode<T>;

  constructor(value: T) {
    super(value);
    this.prev = null;
  }
}

class DoublyLinkedList<T> extends LinkedList<T> {
  head: DoublyLinkedListNode<T>;
  tail: DoublyLinkedListNode<T>;

  constructor() {
    super();
    this.tail = null;
  }

  insert(element: T, index: number) {
    if (!this.isValidIndex(index)) return false;

    const node = new DoublyLinkedListNode(element);
    if (index === 0) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
    } else if (index === this.count) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      let prev = this.getElementAt(index - 1) as DoublyLinkedListNode<T>;
      node.next = prev.next;
      node.prev = prev;
      prev.next = node;
    }
    this.count++;
    return true;
  }

  removeAt(index: number) {
    if (!this.isValidIndex(index)) return false;

    if (index === 0) {
      if (this.count === 1) {
        this.head = this.tail = null;
      } else {
        this.head.next.prev = null;
      }
    } else if (index === this.count - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.count--;
    return true;
  }
}
