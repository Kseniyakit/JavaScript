const arr = ['a', 17.1, 'John Doe', 13, 45];
const obj = { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe', '21':21, '3':3 };
function pickProps (obj, arr){
    let result = {};
    for (let i = 0; i < arr.length; i++){
        for (let key in obj){
            if (arr[i]==key) result[key]=obj[key];
         
        }
    }
    return result;
} 
console.log(pickProps(obj, arr));



