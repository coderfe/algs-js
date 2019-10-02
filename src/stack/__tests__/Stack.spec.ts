import { Stack_Array, Stack_Object, baseConverter } from '../Stack';

test('Stack_Array', () => {
  const stack: Stack_Array<number> = new Stack_Array();
  expect(stack.size()).toEqual(0);
  expect(stack.isEmpty()).toBe(true);

  stack.push(0);
  stack.push(7);
  expect(stack.size()).toEqual(2);
  expect(stack.isEmpty()).toBe(false);

  expect(stack.peek()).toEqual(7);
  expect(stack.size()).toEqual(2);

  expect(stack.pop()).toEqual(7);
  expect(stack.size()).toEqual(1);

  stack.clear();
  expect(stack.size()).toEqual(0);
  expect(stack.pop()).toBe(undefined);
});

test('Stack_Object', () => {
  const stack: Stack_Object<number> = new Stack_Object();
  expect(stack.size()).toEqual(0);
  expect(stack.isEmpty()).toBe(true);

  stack.push(0);
  stack.push(7);
  expect(stack.size()).toEqual(2);
  expect(stack.isEmpty()).toBe(false);

  expect(stack.peek()).toEqual(7);
  expect(stack.size()).toEqual(2);

  expect(stack.pop()).toEqual(7);
  expect(stack.size()).toEqual(1);

  stack.clear();
  expect(stack.size()).toEqual(0);
});

test('baseConverter', () => {
  expect(baseConverter(5, 2)).toBe('101');
});

test('baseConverter(5, 42)', () => {
  expect(baseConverter(5, 42)).toEqual('');
});
