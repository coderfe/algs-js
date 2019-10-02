export class Queue_Array<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  peek(): T {
    return this.items[0];
  }

  clear() {
    this.items = [];
  }
}

export class Queue_Object {
  items: { [key: string]: any };
  start: number;
  count: number;

  constructor() {
    this.items = {};
    this.start = 0;
    this.count = 0;
  }

  enqueue(item: any) {
    this.items[this.count] = item;
    this.count++;
  }

  dequeue(): any {
    const result = this.items[this.start];
    delete this.items[this.start];
    this.start++;
    return result;
  }

  peek(): any {
    return this.items[this.start];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size() {
    return this.count - this.start;
  }

  clear() {
    this.items = {};
    this.start = 0;
    this.count = 0;
  }
}
