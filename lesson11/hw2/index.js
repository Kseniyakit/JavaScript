const countOccurrences = (string, stringToFind) =>{
if (stringToFind === ''){
    return null;
}
return (string.split(stringToFind).length - 1);
}
console.log(countOccurrences('The quick brown the fox jumps over the lazy dog.', 'the'));
