const { calculateArea, calculatePerimeter } = require('../src/03');

describe('calculate area', () => {
	test('radius is 2', () => {
		expect(calculateArea(2)).toBe(12.57)
	});

	test('radius is -2', () => {
		expect(() => calculateArea(-2)).toThrow(
			'Invalid input: the argument must be an positive number.'
		);

		expect(() => calculateArea('a')).toThrow(
			'Invalid input: the argument must be an positive number.'
		);
	});
});

describe('calculate perimeter', () => {
	test('radius is 2', () => {
		expect(calculateArea(2)).toBe(12.57)
	});

	test('radius is -2', () => {
		expect(() => calculateArea(-2)).toThrow(
			'Invalid input: the argument must be an positive number.'
		);

		expect(() => calculateArea('a')).toThrow(
			'Invalid input: the argument must be an positive number.'
		);
	});
});