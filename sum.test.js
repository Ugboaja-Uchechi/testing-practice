// const { describe } = require('yargs');
// const square = require('./sum.js');
const stringLength = require('./sum.js');
const reversedString = require('./sum.js');
const capitalise = require('./sum.js')

test('stringLength', () => {
  expect(stringLength);
});

test('reversedString', () => {
  expect(reversedString);
});

test('capitalisedString', () => {
  expect(capitalise);
});

// describe('Calculator', () =>  {
//   test('return sum of height + width', () => {
//     expect(addition(2, 2)).toBe(4);
//   });

// })
