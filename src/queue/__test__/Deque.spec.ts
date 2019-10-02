import { Deque, palindromeChecker } from '../Deque';

test('Deque', () => {
  const deque: Deque<number> = new Deque();

  expect(deque.isEmpty()).toBe(true);

  deque.addBack(1);
  deque.addBack(2);
  deque.addBack(3);
  deque.addBack(4);
  deque.addBack(5);
  deque.addBack(6);
  expect(deque.removeBack()).toEqual(6);
  expect(deque.removeFront()).toEqual(1);
  expect(deque.size()).toEqual(4);

  deque.addFront(1);
  expect(deque.peekFront()).toEqual(1);
});

test('palindromeChecker', () => {
  expect(palindromeChecker('level')).toBe(true);
  expect(palindromeChecker('a')).toBe(true);
});
