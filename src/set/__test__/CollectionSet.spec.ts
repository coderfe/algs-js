import { CollectionSet } from '../CollectionSet';

test('CollectionSet method', () => {
  const setA = new CollectionSet();

  setA.add('javascript');
  setA.add('java');

  expect(setA.has('javascript')).toBe(true);
  expect(setA.add('javascript')).toBe(false);

  expect(setA.has('golang')).toBe(false);

  expect(setA.add('any')).toBe(true);
  expect(setA.delete('any')).toBe(true);
  expect(setA.delete('any')).toBe(false);

  expect(setA.size()).toEqual(2);

  setA.clear();
  expect(setA.size()).toEqual(0);
});

test('CollectionSet operation', () => {
  const setA = new CollectionSet();
  const setB = new CollectionSet();

  setA.add('java');
  setA.add('javascript');
  setA.add('golang');

  setB.add('java');
  setB.add('typescript');
  setB.add('erlang');
  setB.add('javascript');

  expect(setA.union(setB).values()).toEqual([
    'java',
    'javascript',
    'golang',
    'typescript',
    'erlang'
  ]);
  expect(setB.intersection(setA).values()).toEqual(['java', 'javascript']);
  expect(setA.intersection(setB).values()).toEqual(['java', 'javascript']);

  expect(setB.difference(setA).values()).toEqual(['typescript', 'erlang']);

  expect(setB.isSubsetOf(setA)).toEqual(false);
  expect(setA.isSubsetOf(setB)).toEqual(false);
  setA.delete('golang');
  expect(setA.isSubsetOf(setB)).toEqual(true);
});
