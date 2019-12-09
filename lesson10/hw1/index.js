const arr = [ 5.15, 6.78, 9.19, 1.2];

const getTotalPrice = arr => {
    let sumOfArr = 0;
    arr.forEach(num => {
        sumOfArr += num;
    });
    const ArrRound = (Math.floor(sumOfArr*100))/100;
    return ('$' + ArrRound);
}

console.log(getTotalPrice(arr));
