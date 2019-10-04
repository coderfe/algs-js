export class CollectionSet {
  items: { [key: string]: any };

  constructor() {
    this.items = {};
  }

  add(element: any) {
    if (this.has(element)) return false;
    this.items[element] = element;
    return true;
  }

  delete(element: any) {
    if (!this.has(element)) return false;
    delete this.items[element];
    return true;
  }

  values() {
    return Object.values(this.items);
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }

  has(element: string) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  union(otherSet: CollectionSet) {
    const result = new CollectionSet();
    this.values().forEach(item => result.add(item));
    otherSet.values().forEach(item => result.add(item));
    return result;
  }

  intersection(otherSet: CollectionSet) {
    const result = new CollectionSet();
    let [smaller, bigger] = [this.values(), otherSet.values()];
    if (smaller.length > bigger.length) {
      [smaller, bigger] = [bigger, smaller];
    }
    smaller.forEach(item => {
      if (bigger.includes(item)) {
        result.add(item);
      }
    });
    return result;
  }

  difference(otherSet: CollectionSet) {
    const result = new CollectionSet();
    this.values().forEach(item => {
      if (!otherSet.has(item)) {
        result.add(item);
      }
    });
    return result;
  }

  isSubsetOf(otherSet: CollectionSet) {
    if (this.size() > otherSet.size()) return false;
    let result = true;
    this.values().every(item => {
      if (!otherSet.has(item)) {
        result = false;
        return false;
      }
      return true;
    });
    return result;
  }
}
