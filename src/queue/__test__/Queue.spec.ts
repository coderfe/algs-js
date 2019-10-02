import { Queue_Array, Queue_Object } from '../Queue';

test('Queue_Array', () => {
  const queue: Queue_Array<number> = new Queue_Array();

  expect(queue.size()).toEqual(0);
  expect(queue.isEmpty()).toBe(true);

  queue.enqueue(12);
  queue.enqueue(0);

  expect(queue.peek()).toEqual(12);
  expect(queue.size()).toEqual(2);
  expect(queue.isEmpty()).toEqual(false);

  expect(queue.dequeue()).toEqual(12);

  queue.clear();

  expect(queue.size()).toEqual(0);
});

test('Queue_Object', () => {
  const queue: Queue_Object = new Queue_Object();

  expect(queue.size()).toEqual(0);
  expect(queue.isEmpty()).toBe(true);

  queue.enqueue(12);
  queue.enqueue(0);

  expect(queue.peek()).toEqual(12);
  expect(queue.size()).toEqual(2);
  expect(queue.isEmpty()).toEqual(false);

  expect(queue.dequeue()).toEqual(12);

  queue.clear();

  expect(queue.size()).toEqual(0);
});
