
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
    let max = getMaxValue(arr);
let min = getMinValue(arr);
    return (min + max > 1000) ? true : false;
}
