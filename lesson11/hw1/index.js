const splitString = (string, len) => {
    const strArr = [];
    let startPosition = 0;
    if (typeof str !== 'string') return null;
while(true){
    let chunk = string.substr(startPosition, len);
    if(chunk.length === 0) {
        break;
    }
    while(chunk.length<len){
        chunk += ".";
    };
    startPosition += len;
    strArr.push(chunk);
    
  
    }
    return strArr;
};
console.log (splitString( 'gkjgkjgkjh iukjklhjkl yihkjhjh', 5));