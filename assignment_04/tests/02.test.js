const { reverse } = require('../src/02');

describe('reverse integer', () => {
  test('reverse 123 to 321', () => {
    expect(reverse(123)).toBe(321);
  });

  test('reverse 110 to 11', () => {
    expect(reverse(110)).toBe(11);
  });

  test('throws error when input is invalid', () => {
    expect(() => reverse('a')).toThrow(
      'Invalid input: the argument must be an positive integer.'
    );
    expect(() => reverse(11.2)).toThrow(
      'Invalid input: the argument must be an positive integer.'
    );
  });
});
