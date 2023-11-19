/**
 * Write a function to take a number as an argument,
 * and reverse it, return the result.
 *
 * Example:
 * x = 12345
 * expected output: 54321
 * Edge case: what if there is an zero
 */


function reverseNumber(number) {
  let numberString = number.toString();
  let reverseNumberString = numberString.split("").reverse().join("");
  let reversedNumber = Number(reverseNumberString);
  return reversedNumber;
}

let number = 123;

console.log(reverseNumber(number))