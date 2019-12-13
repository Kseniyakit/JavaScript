const splitText = (text, len=10) => {
    const strArr = [];
    let startPosition = 0;
    if (typeof str !== 'string') return null;
  while(len){
    let chunk = text.substr(startPosition, len);
    if(chunk.length === 0) {
        break;
    }
  
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  
    }
    return strArr.join('\n');
  };