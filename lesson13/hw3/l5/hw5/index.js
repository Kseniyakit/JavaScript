export function findDivCount(a, b, n){
   let result = 0;
    for (let i =a; i<=b; i++){
        if (i%n===0) result++;
    }
     return result;
    }
/* console.log (findDivCount(2, 8, 2)); */
console.log (findDivCount());
