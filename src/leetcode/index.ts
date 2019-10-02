export function removeDuplicates(arr: number[]): number {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

export function maxProfit(prices: number[]): number {
  let result: number = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      result += prices[i] - prices[i - 1];
    }
  }
  return result;
}

export function rotate(arr: number[], k: number) {
  while (k > 0) {
    arr.unshift(arr.pop() as number);
    k--;
  }
}

// 循环不变式
export function containsDuplicate(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] === arr[i]) return true;
    }
  }
  return false;
}

// 排序
export function containsDuplicate_1(arr: number[]) {
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return true;
  }
  return false;
}

// 哈希表
export function containsDuplicate_2(arr: number[]) {
  let set = new Set<number>();
  for (const num of arr) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}

export function singleNumber(arr: number[]) {
  let a = 0;
  for (const num of arr) {
    a ^= num;
  }
  return a;
}
