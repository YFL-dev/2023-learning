const { calculateOccurrence } = require('../src/04');

describe('calculate occurence', () => {
	test('unique occurence', () => {
		expect(calculateOccurrence([1, 2, 2, 1, 1, 3])).toBe(true)
	});

	test('non-unique occurence', () => {
		expect(calculateOccurrence([1, 2])).toBe(false)
	});

	test('invalid input: not an array', () => {
		expect(() => calculateOccurrence(1, 2, 3)).toThrow(
			'Invalid input: the argument must be an array.'
		);
	})

	test('invalid input: not integers', () => {
		expect(() => calculateOccurrence(['a', 'b', 3])).toThrow(
			'Invalid input: the elements array must be integers.'
		)
	})

})