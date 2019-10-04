import LinkedList from '../LinkedList';

test('LinkedList', () => {
  const linkedList: LinkedList<string> = new LinkedList();

  linkedList.push('Chen');
  expect(linkedList.indexOf('Chen')).toEqual(0);
});
