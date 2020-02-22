import add from '../src';
// const add = require('../src');

test('函数add测试用例：2 + 101 = 103', () => {
  expect(add(2, 101)).toBe(103);
});