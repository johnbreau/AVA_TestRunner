import Rx from 'rxjs/Rx';
import test from 'ava';

test('Test One:', t => {
  t.pass();
});

test.todo('check to see if observable is functional');

let myItems = ['notebooks', 'pens', 'coffeecup', 'phone'];

let myItemsSource$ = Rx.Observable.from(['notebooks', 'pens', 'coffeecup', 'phone']);

const example = myItemsSource$.first();

console.log('first', example);
console.log('items', myItems);

test('Test Two:', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});
