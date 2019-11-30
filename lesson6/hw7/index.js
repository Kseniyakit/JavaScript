
let arr = [2, 5, 6, 1200, 12, 15, 0, 3, -8, 9];
let max = getMaxValue(arr);
let min = getMinValue(arr);

 

function getMaxValue(arr){
    let max = arr[0]; 
    for (let i = 0; i < arr.length; i++) { 
        if (max < arr[i]) max = arr[i]; 
    }
    return max;
}
function getMinValue(arr){
    let min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}
function checker(arr){
    return (min + max > 1000) ? true : false;
}
console.log(checker(arr));