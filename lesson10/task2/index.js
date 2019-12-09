const arr = [2, 3.15, 5.678904, NaN, null, 10, 3.1, 'text'];

const getParsedIntegers = arr => {
    const result = arr.map(el => Number.parseInt(el));
    return result;
}
console.log(getParsedIntegers(arr));

const getParsedIntegersV2 = arr => {
    const result = arr.map(el => parseInt(el));
    return result;
}
console.log(getParsedIntegersV2(arr));


const getParsedFloats = arr => {
    const result = arr.map(el => Number.parseFloat(el));
    return result;
}
console.log(getParsedFloats(arr));


const getParsedFloatsV2 = arr => {
    const result = arr.map(el => parseFloat(el));
    return result;
}
console.log(getParsedFloatsV2(arr));


