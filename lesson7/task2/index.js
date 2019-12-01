const sortDesc = numbers => {
    return  numbers.slice().sort( (a,b) =>
    b-a);
}
sortDesc([3,1,100,9]);