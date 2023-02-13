// Making use of function expression
const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
};

// Making use of arrow functions  
/**
 * Calculates the area of a rectangle.       
 * @param {number} width - the width of the rectangle       
 * @param {number} height - the height of the rectangle       
 * @returns {number} the area of the rectangle       
 */
const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
}
  
console.log(plantNeedsWater('Wednesday'));
console.log(rectangleArea(3, 2));

// This block of code
const squareNum = (num) => {
    return num * num;
}
  
// Can be refactored as follows(this is called a concise body)
const squareNumber = num => num * num;

console.log(squareNumber(2));
console.log(squareNum(4));
console.log(typeof squareNum(4));