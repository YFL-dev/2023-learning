/**
 * Write a function to sum 1 to 100,
 * return the result.
 */



/**
 * function 
 * 1. annoymous
 * 2. named 
 * 3. arrow function 
 * 4. IIEF 
 * 
 * naming convention: 
 * 1. snake: python
 * 2. camel: Java, JavaScript 
 */

// named function
// 1. name 
// 2. arguments, args, parameters, param
// 3. returned value 
// 4. function body
function calculateSum() {

  let total = 0;

  for (let i = 1; i < 101; i++) {
    total += i;
  }

  return total;
}

console.log(calculateSum())
