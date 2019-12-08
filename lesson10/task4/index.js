const arr =  [-777, 3, -1, 45, -20];
const getMaxAbsoluteNumber = arr =>{
    const absoluteValues = arr.map(num =>Math.abs(num));
    const max = Math.max(...absoluteValues);
    return max;
}
console.log(getMaxAbsoluteNumber(arr));