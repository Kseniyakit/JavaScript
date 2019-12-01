const number = [7, 99, 101, 303, 88];
const copy = number.slice();
const reverseArray = copy => 
  (!Array.isArray(copy))
     ? null : copy.reverse();

 console.log(reverseArray(copy));