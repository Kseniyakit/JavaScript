const arr =  [-777, 3, -1, 45, -20];
const getMaxAbsoluteNumber = arr =>
  (!Array.isArray(arr) || arr.length === 0) ? null :
 Math.max(...arr.map(num =>Math.abs(num)));
   

console.log(getMaxAbsoluteNumber(arr));