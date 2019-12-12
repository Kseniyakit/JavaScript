
const splitText = (text, len) => {
    const strArr = [];
    let startPosition = 0;

while(true){
    let chunk = text.substr(startPosition, len);
    if(chunk.length === 0) {
        break;
    }
    startPosition += len;
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    
  
    }
    return strArr.join('\n');
};

console.log (splitText('abcdefghklmnoprst', 4));

