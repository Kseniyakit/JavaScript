let l = 9;
let min = 2.39;
let max = 7.9765;

const getRandomNumbers = (l,min,max) =>{
  const arr = [];
  arr.length = l;

  if (max<min || ((max-min)<1) && Math.ceil(max) === Math.ceil(min)){
      return null;
  }
  min = Math.ceil(min);
    max = Math.floor(max);
  return arr.fill()
  .map(() => Math.floor(Math.random()*(max-min)+min));
}
/* for(let i=0; i<l; i++){
arr.push(randomInteger(min,max))
}

return arr;
};


const randomInteger =(min, max) =>{
min = Math.ceil(min);
 max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + min);
};
   */
console.log(getRandomNumbers(l,min,max)); 

