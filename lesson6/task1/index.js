const numbers = [4, 7, 99,30];

function getArrayBounds(arr) {
return [arr.length, arr[0], arr[arr.length-1]];
}
const arrayBound = getArrayBounds(numbers);
console.log(arrayBound);