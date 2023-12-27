const { sum, sum1, sum2 } = require('../src/01');

const functionsToTest = [
  { name: 'sum', func: sum },
  { name: 'sum1', func: sum1 },
  { name: 'sum2', func: sum2 },
];

describe.each(functionsToTest)('$name', ({ func }) => {
  test('add 1 to 100 to equal 5050', () => {
    expect(func(100)).toBe(5050);
  });

  test('add 1 to "100" to equal 5050', () => {
    expect(func('100')).toBe(5050);
  });

  test('add 1 to "100.0" to equal 5050', () => {
    expect(func('100.0')).toBe(5050);
  });

  test('add 1 to 100.0 to equal 5050', () => {
    expect(func(100.0)).toBe(5050);
  });

  test('throws error when input is invalid', () => {
    expect(() => func(-100)).toThrow(
      'Invalid input: argument must be a positive integer.'
    );
    expect(() => func('a')).toThrow(
      'Invalid input: argument must be a positive integer.'
    );
    expect(() => func(11.02)).toThrow(
      'Invalid input: argument must be a positive integer.'
    );
  });
});
