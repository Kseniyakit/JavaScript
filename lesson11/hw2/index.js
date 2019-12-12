const countOccurrences = (string, stringToFind) =>{
if (stringToFind === ''){
    return null;
}
return (string.split(stringToFind).length);
}
console.log(countOccurrences('The quick brown the fox jumps over the lazy dog.', 'the'));
