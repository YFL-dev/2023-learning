const { sum } = require('../src/01');

describe('sum', () => {
  test('add 1 to 100 to equal 5050', () => {
    expect(sum(100)).toBe(5050);
  });

  test('add 1 to 100 to equal 5050', () => {
    expect(sum('100')).toBe(5050);
  });

  test('add 1 to 100 to equal 5050', () => {
    expect(sum('100.0')).toBe(5050);
  });

  test('add 1 to 100 to equal 5050', () => {
    expect(sum(100.0)).toBe(5050);
  });

  test('throws error when input is invalid', () => {
    expect(() => sum(-100)).toThrow(
      'Invalid input: argument must be a positive integer.'
    );
    expect(() => sum('a')).toThrow(
      'Invalid input: argument must be a positive integer.'
    );
    expect(() => sum(11.02)).toThrow(
      'Invalid input: argument must be a positive integer.'
    );
  });
});
