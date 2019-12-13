const countOccurrences = (string, stringToFind) =>{
if (stringToFind === ''){
    return null;
}
return (string.split(stringToFind).length - 1);
}
console.log(countOccurrences('The quick brown the fox jumps over the lazy dog.', 'the'));

let indices = [];
let array = ['a', 'b', 'a', 'c', 'a', 'd'];
let element = 'a';
let idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx);
}
console.log(indices);

const splitText = (text, len) => {
  const strArr = [];
  let startPosition = 0;

while(true){
  let chunk = text.substr(startPosition, len);
  if(chunk.length === 0) {
      break;
  }

  strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
  startPosition += len;

  }
  return strArr.join('\n');
};