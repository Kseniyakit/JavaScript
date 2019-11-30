const numbers = [34,87,89,56,67];
function swap(arr) {
const [start, ...rest] = arr;
return [...rest, start];
}
console.log(swap(numbers));