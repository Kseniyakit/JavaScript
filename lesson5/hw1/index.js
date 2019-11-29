function getSum(a,b){
    let sum = 0;
 for (i=a; i<=b; i++){
if (i % 2 === 0){
    sum += i;
} 
}
return sum;
}
getSum(5,17);