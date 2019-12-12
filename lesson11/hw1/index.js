const splitString = (string, len=10) => {
    if (typeof string !== 'string') return null;
    const strArr = [];
    let startPosition = 0;
    
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
console.log (splitString( 'gkjgkjgkjh iukjklhjkl yihkjhjh'));