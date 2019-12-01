const number = [7, 99, 101, 303, 88];

const squareArray = number => 
 
   !Array.isArray(number) ?
    null : number.map(num => num*num);
  

 
console.log(squareArray(number));