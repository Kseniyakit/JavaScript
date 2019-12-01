const number = [7, 99, 101, 303, 88];
const reverseArray = number => 
  (!Array.isArray(number.slice()))
     ? null : number.slice().reverse();

 console.log(reverseArray(number));