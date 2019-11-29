function getSum(a,b){
    let sum = 0;
 for (let i=a; i<=b; i++){
    i % 2 === 0 ? sum += i : 0;
}
return sum;
}
