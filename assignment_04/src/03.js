/**
 * Write a function to find the area and perimeter of a circle
 * take radius as an argument for the function call
 */

const calculateArea = (radius) => {
	if (typeof radius !== 'number' || radius < 0) {
		throw new Error('Invalid input: the argument must be an positive number.');
	};

	let area = Math.PI * radius * radius;

	return parseFloat(area.toFixed(2))
}

const calculatePerimeter = (radius) => {
	if (typeof radius !== 'number' || radius < 0) {
		throw new Error('Invalid input: the argument must be an positive number.');
	};

	let perimeter = 2 * Math.PI * radius;

	return parseFloat(perimeter.toFixed(2))
}

module.exports = {
	calculateArea,
	calculatePerimeter
}