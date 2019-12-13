const reverseString = string =>{
    let letters=[];
    let l = string.length;
    if (typeof string !== 'string') return null;
    while(l--){
        letters.push(string[l]);
    }
    return letters.join('')
}
console.log(reverseString('Hello world'));