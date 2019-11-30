const number = [7, 99, 101, 303, 88];

function squareArray(number){
  
   let SpecialNumbers = [];
   if(!Array.isArray(number)){
    return null;
} else {
   for (let i = 0; i< number.length; i++){
       let square = number[i]*number[i];
SpecialNumbers.push(square);
   }
}
   return SpecialNumbers;
}
const SpecialNumbers = squareArray(number);
console.log(SpecialNumbers);