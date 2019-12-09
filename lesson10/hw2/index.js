let l = 9;
let min = 2.39;
let max = 7.9765;

const getRandomNumbers = (l,min,max) =>{
  const arr = [];
  min = Math.round(min);
  max = Math.round(max);
  if (max<min || (max-min)<0){
      return null;
  }
for(let i=0; i<=l; i++){

arr.push(randomInteger(min,max));
}
return arr;
};


const randomInteger =(min, max) =>
Math.floor(min + Math.random() * (max - min))
;
  
console.log(getRandomNumbers(l,min,max));