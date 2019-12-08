const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
};
function getCustomersList(obj){
    let object = Object.assign({}, obj);
    let arr = Object.entries(object)
    .map(x => x ={...x[1], id: x[0]} )
    .sort((a,b)=>a.age > b.age ? 1 : -1);
    return arr;
}
console.log(getCustomersList(customers))
