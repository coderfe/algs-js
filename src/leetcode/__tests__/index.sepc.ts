import {
  removeDuplicates,
  maxProfit,
  rotate,
  containsDuplicate,
  containsDuplicate_1,
  containsDuplicate_2,
  singleNumber
} from '../index';

test('removeDuplicates([1, 1, 2]) should return 2', () => {
  expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test('removeDuplicates([]) should return 2', () => {
  expect(removeDuplicates([])).toEqual(0);
});

test('removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) should return 5', () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});

test('maxProfit([7, 1, 5, 3, 6, 4]) should return 7', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
});

test('rotate([-1,-100,3,99], 2) should return [3, 99, -1, -100]', () => {
  const arr = [-1, -100, 3, 99];
  rotate(arr, 2);
  expect(arr).toEqual([3, 99, -1, -100]);
});

test('containsDuplicate([1, 2 , 3, 1], 2) should return true', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test('containsDuplicate([1, 2 , 3, 6]) should return false', () => {
  expect(containsDuplicate([1, 2, 3, 6])).toBe(false);
});

test('containsDuplicate_1([1, 2 , 3, 1], 2) should return true', () => {
  expect(containsDuplicate_1([1, 2, 3, 1])).toBe(true);
});

test('containsDuplicate_1([1, 2 , 3, 6]) should return false', () => {
  expect(containsDuplicate_1([1, 2, 3, 6])).toBe(false);
});

test('containsDuplicate_2([1, 2 , 3, 1], 2) should return true', () => {
  expect(containsDuplicate_2([1, 2, 3, 1])).toBe(true);
});

test('containsDuplicate_2([1, 2 , 3, 6]) should return false', () => {
  expect(containsDuplicate_2([1, 2, 3, 6])).toBe(false);
});

test('singleNumber([4,1,2,1,2]) should return 6', () => {
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
});
