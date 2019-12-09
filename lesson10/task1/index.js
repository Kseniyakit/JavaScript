const arr = [2, 3.15, 5.678904, NaN, null, 10, 3.1, 'text'];

const getFiniteNumbers = arr => {
const arrCopy = arr.slice();
  const arrFilter = arrCopy.filter(num => Number.isFinite(num));
  return arrFilter;
}

console.log(getFiniteNumbers(arr));


const getFiniteNumbersV2 = arr => {
    const arrCopy = arr.slice();
    const arrFilter = arrCopy.filter(num => isFinite(num));
    return arrFilter;
}
console.log(getFiniteNumbersV2(arr));


const getNaN = arr => {
    const arrCopy = arr.slice();
    const arrFilter = arrCopy.filter(num => Number.isNaN(num));
    return arrFilter;
}
console.log(getNaN(arr));

const getNaNV2 = arr => {
    const arrCopy = arr.slice();
    const arrFilter = arrCopy.filter(num =>isNaN(num));
    return arrFilter;
}
console.log(getNaNV2(arr));

const getIntegers = arr => {
    const arrCopy = arr.slice();
    const arrFilter = arrCopy.filter(num =>Number.isInteger(num));
    return arrFilter;
}
console.log(getIntegers(arr));