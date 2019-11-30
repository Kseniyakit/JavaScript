const array = [5, 6, 5, 7, 8];

function removeDuplicates(array){
    let result = [];

    for (let i of array) {
      if (!result.includes(i)) {
        result.push(i);
      }
    }
  
    return result;
  }
  console.log(removeDuplicates(array));
  
