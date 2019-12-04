const arr = ['a', 17.1, 'John Doe'];
const transformToObject = arr => {
    let obj = {};
    arr.forEach(el => {
        obj[el] = el;
    });
    return obj;
}
console.log (transformToObject(arr));