
export const reverseArray = number => 
  (!Array.isArray(number))
     ? null : number.slice().reverse();

/*  console.log(reverseArray([2, 3, 4, 5, 6])); */
