/**
 * Given an array of integers, nums,
 * return true if the number of occurrences of each value in the array
 * is unique or false otherwise.
 *
 * Example:
 * arra = [1, 2, 2, 1, 1, 3]
 * expected output: true
 * explanation: The value 1 has 3 occurrences,
 * 2 has 2, and 3 has 1. No two values have the same number of occurrences.
 *
 * Another example:
 * arr = [1, 2]
 * expected output: false
 */

const calculateOccurrence = (arr) => {
	// test if the parameter is an object
	if (typeof arr !== 'object') {
		throw new Error('Invalid input: the argument must be an array.')
	}

	// test if all elements in the array are integers
	if (!arr.every(Number.isInteger)) {
		throw new Error('Invalid input: the elements array must be integers.')
	}
	const counter = {};

	arr.forEach(ele => {
		if (counter[ele]) {
			counter[ele] += 1;
		} else {
			counter[ele] = 1;
		}
	})
	// check if all values are unique
	const values = Object.values(counter);
	const uniqueValues = new Set(values);

	return values.length === uniqueValues.size;

}

module.exports = {
	calculateOccurrence
}