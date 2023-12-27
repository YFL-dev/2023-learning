/**
 * Write a function to sum 1 to n,
 * return the result.
 * num: integer or string integer 
 * 
 */

const sum = (num) => {
  num = Number(num)

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

module.exports = {
  sum,
};
