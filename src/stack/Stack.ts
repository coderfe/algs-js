export class Stack_Array<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek(): T {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

export class Stack_Object<T> {
  items: { [key: string]: T };
  count: number;

  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(item: T) {
    this.items[this.count] = item;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek(): T {
    return this.items[this.count - 1];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }
}

export function baseConverter(decNumber: number, base: number): string {
  const remStack: Stack_Object<number> = new Stack_Object();
  const digits: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem: number;
  let binaryString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop() as number];
  }

  return binaryString;
}
