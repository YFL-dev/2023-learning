/**
 * Write a function to find the area and perimeter of a circle
 * take radius as an argument for the function call
 */

function calculateCircleArea(radius) {
  let circleArea = Math.PI * radius * radius;
  return circleArea;
}

function calculateCirclePerimeter(radius) {
  let circlePerimeter = 2 * Math.PI * radius;
  return circlePerimeter;
}

let radius = 3;

console.log(calculateCircleArea(radius));
console.log(calculateCirclePerimeter(radius));
