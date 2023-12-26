const add = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Invalid input: both arguments must be numbers.');
  }
  return num1 + num2;
};

const divide = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Invalid input: both arguments must be numbers.');
  }

  if (num2 === 0) {
    throw new Error('Division by zero is not allowed.');
  }

  return num1 / num2;
};

module.exports = {
  add,
  divide,
};
