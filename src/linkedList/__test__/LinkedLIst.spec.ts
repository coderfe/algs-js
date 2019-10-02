import LinkedList from '../LinkedList';

test('LinkedList', () => {
  const linkedList: LinkedList<string> = new LinkedList();

  linkedList.push('C');
  expect(linkedList.indexOf('Chen')).toEqual(0);
});
