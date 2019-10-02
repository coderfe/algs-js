export class Deque<T> {
  items: { [key: string]: T };
  start: number;
  count: number;

  constructor() {
    this.items = {};
    this.start = 0;
    this.count = 0;
  }

  addFront(item: T) {
    if (this.isEmpty()) {
      this.addBack(item);
    } else if (this.start > 0) {
      this.start--;
      this.items[this.start] = item;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.start = 0;
      this.items[0] = item;
    }
  }

  addBack(item: T) {
    this.items[this.count] = item;
    this.count++;
  }

  removeFront(): T {
    const result = this.items[this.start];
    delete this.items[this.start];
    this.start++;
    return result;
  }

  removeBack(): T {
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  peekFront(): T {
    return this.items[this.start];
  }

  peekBack() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size(): number {
    return this.count - this.start;
  }
}

export function palindromeChecker(str: string) {
  if (str === undefined || str === null || (str !== null && str.length === 0)) {
    return false;
  }

  const queue: Deque<string> = new Deque();
  const lowerString = str
    .toLocaleLowerCase()
    .split('')
    .join('');
  let isEqual = true;
  let firstChar: string;
  let lastChar: string;

  for (let i = 0; i < lowerString.length; i++) {
    queue.addBack(lowerString[i]);
  }

  while (queue.size() > 1 && isEqual) {
    firstChar = queue.removeFront();
    lastChar = queue.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}
