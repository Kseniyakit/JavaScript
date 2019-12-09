const users = {
    'John Doe': 19,
     'Tom': 17,
      'Bob': 18
}
const getAdults =users =>{
    let result ={};
for(let key in users){
    (users[key] >= 18) ? result[key]=users[key]: 0;
}
return result;
}
console.log (getAdults(users));

