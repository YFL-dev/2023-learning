/**
 * Write a function to sum 1 to n,
 * return the result.
 * num: integer or string integer
 *
 */

const sum = (num) => {
  num = Number(num);

  if (num < 1 || num % 1 !== 0) {
    throw new Error('Invalid input: argument must be a positive integer.');
  }

  if (typeof num !== 'number') {
    throw new Error('Invalid input: argument must be a positive integer.');
  }

  let total = 0;
  for (let i = 1; i < num + 1; i++) {
    total += i;
  }

  return total;
};

const sum1 = (num) => {
  const parsedNum = parseInt(num, 10);

  // Check if the original input was a non-integer number or if it's NaN
  if (isNaN(parsedNum) || parsedNum < 1 || parsedNum !== parseFloat(num)) {
    throw new Error('Invalid input: argument must be a positive integer.');
  }

  return (parsedNum * (parsedNum + 1)) / 2;
};

const sum2 = (num) => {
  num = Number(num);

  if (!Number.isInteger(num) || num < 1) {
    throw new Error('Invalid input: argument must be a positive integer.');
  }

  return (num * (num + 1)) / 2;
};

module.exports = {
  sum,
  sum1,
  sum2,
};
