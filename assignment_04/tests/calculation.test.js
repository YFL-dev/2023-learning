const { describe, test, expect } = require('jest');

const { add, divide } = require('../src/calculation');

describe('Calculation - add', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('throws error when input is invalid', () => {
    expect(() => add('a', 1)).toThrow(
      'Invalid input: both arguments must be numbers.'
    );
    expect(() => add(1, 'b')).toThrow(
      'Invalid input: both arguments must be numbers.'
    );
    expect(() => add('a', 'b')).toThrow(
      'Invalid input: both arguments must be numbers.'
    );
  });
});

describe('Calculation - divide', () => {
  test('divides 6 by 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('divides 0 by 3 to equal 2', () => {
    expect(divide(0, 3)).toBe(0);
  });

  test('divide throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
    expect(() => divide(-10, 0)).toThrow('Division by zero is not allowed.');
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed.');
  });
});
