class Sort {
  static bubbleSort(array: any[]) {
    for (let i = 0, len = array.length; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  }

  static insertionSort(array: any[]) {
    for (let i = 1, len = array.length; i < len; i++) {
      for (let j = 0; j < i; j++) {
        if (array[j] > array[i]) {
          array.splice(j, 0, array[i]);
          array.splice(i + 1, 1);
        }
      }
    }
  }

  static mergeSort(array: any[]): any[] {
    if (array.length <= 1) return array;
    const middle = Math.floor(array.length / 2);
    const left = this.mergeSort(array.slice(0, middle));
    const right = this.mergeSort(array.slice(middle, array.length));
    return this.merge(left, right);
  }

  private static merge(left: any[], right: any[]) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
      result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
  }
}
