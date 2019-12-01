const sortDesc = numbers => {
 
    numbers.sort( (a,b) =>
        b-a);
    return numbers;
}
sortDesc([3,1,100,9]);