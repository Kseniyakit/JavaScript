function getSpecialNumbers(from, to){
let SpecialNumbers = [];
for( let i = from; i<= to; i++){
    if( i%3===0){
        SpecialNumbers.push(i);
    }
}
    return SpecialNumbers;
}
const SpecialNumbers = getSpecialNumbers(5, 100);
console.log(SpecialNumbers);