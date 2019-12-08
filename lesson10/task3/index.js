
const num = 3.14159265359;
const multiRound = num =>
    [Math.floor(num), Math.round(num), Math.ceil (num), Math.trunc(num), +num.toFixed()]
console.log(multiRound(num));