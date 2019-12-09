let l = 9;
let min = 2.39;
let max = 7.9765;

const getRandomNumbers = (l,min,max) =>{
  const arr = [];


  if (max<min || ((max-min)<1)){
      return null;
  }
for(let i=0; i<l; i++){
arr.push(randomInteger(min,max))
}
for (let i = 0; i < l; i++) {
    if (arr[i] !== Math.trunc(arr[i])) return null;
}
return arr;
};


const randomInteger =(min, max) =>{
    min = Math.ceil(min);
 max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min;
};
  
console.log(getRandomNumbers(l,min,max)); 

