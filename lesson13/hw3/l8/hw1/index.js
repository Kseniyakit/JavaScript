
export function pickProps (obj, arr){
    let result = {};
    if (arr === undefined) return null;
    for (let i = 0; i < arr.length; i++){
        for (let key in obj){
            if (arr[i]==key) result[key]=obj[key];
         
        }
    }
    return result;
} 
/*  console.log(pickProps ({ a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }, ['a', 17.1, 'John Doe'])); */
/* console.log(pickProps ()); */





