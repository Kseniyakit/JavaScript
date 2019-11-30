const numbers = [33, 76, 51, 48];

function getSum(arr){
    let sumOfNumbers = 0;
    for(let i=0; i<numbers.length; i++){
       sumOfNumbers+= numbers[i];
    }
    if (!Array.isArray){
        return null;
    }
    return sumOfNumbers;
}
console.log(getSum(numbers));