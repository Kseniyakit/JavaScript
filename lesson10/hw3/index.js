
const superRound = (num, round)=>
      [ Math.floor(num*Math.pow(10,round) )/Math.pow(10,round) , 
        Math.round(num*Math.pow(10,round) )/Math.pow(10,round) ,
        Math.ceil (num*Math.pow(10,round) )/Math.pow(10,round) , 
        Math.trunc(num*Math.pow(10,round) )/Math.pow(10,round) ,
        Number(num.toFixed(round)),];
    
        console.log(superRound(5.8978,2));

