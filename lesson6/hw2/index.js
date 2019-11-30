const array = [1, 2, 3, 4];

function reverseArray(array){
    let specialArray = [];
    if(!Array.isArray(array)){
        return null;
    } else {
        for (let i = array.length-1; i>=0; i--){
            specialArray.push(array[i]);
        }
    }
    return specialArray;
}
const specialArray = reverseArray(array)
console.log(specialArray);