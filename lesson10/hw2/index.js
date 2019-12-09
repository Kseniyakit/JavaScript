let l = 9;
let min = 2.39;
let max = 7.9765;

const getRandomNumbers = (l,min,max) =>{
  const arr = [];
for(let i=0; i<=l; i++){

arr.push(randomInteger(min,max));
}
return arr;
};


const randomInteger =(min, max) =>
Math.floor(min + Math.random() * (max - min))
;
  
console.log(getRandomNumbers(l,min,max));