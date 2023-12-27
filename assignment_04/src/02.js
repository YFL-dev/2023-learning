/**
 * Write a function to take a number as an argument,
 * and reverse it, return the result.
 *
 * Example:
 * x = 12345
 * expected output: 54321
 * Edge case: what if there is an zero
 */

const reverse = (num) => {

	// Check if the argument is an integer
	if (num < 0 || !Number.isInteger(num)) {
		throw new Error('Invalid input: the argument must be an positive integer.');
	};

	// Convert integer to array
	const arr = Array.from(String(num), Number);

	// Reverse the array
	arr.reverse();

	// Convert array to integer
	const str = arr.join('');
	const reversedNum = parseInt(str);

	return (reversedNum);

};

module.exports = {
	reverse
};


