class ValuePair<T, K> {
  key: T;
  value: K;

  constructor(key: T, value: K) {
    this.key = key;
    this.value = value;
  }
}

class Dictionary<T, K> {
  table: { [key: string]: ValuePair<T, K> };

  constructor() {
    this.table = {};
  }

  set(key: T, value: K) {
    if (!(key && value)) return false;
    this.table[this.stringify(key)] = new ValuePair(key, value);
    return true;
  }

  remove(key: T) {
    if (!this.has(key)) return false;
    delete this.table[this.stringify(key)];
    return true;
  }

  get(key: T) {
    if (!this.has(key)) return undefined;
    return this.table[this.stringify(key)];
  }

  keyValues() {
    return Object.values(this.table);
  }

  keys(): T[] {
    return this.keyValues().map(valuePair => valuePair.key);
  }

  values(): K[] {
    return this.keyValues().map(valuePair => valuePair.value);
  }

  has(key: T) {
    return (
      this.table[this.stringify(key)] !== undefined &&
      this.table[this.stringify(key)] !== null
    );
  }

  forEach(callbackfn: Function) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackfn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  stringify(key: T) {
    if (key === null) {
      return 'null';
    } else if (key === undefined) {
      return 'undefined';
    } else if (typeof key === 'string' || key instanceof String) {
      return `${key}`;
    }
    return key.toString();
  }

  clear() {
    this.table = {};
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}
