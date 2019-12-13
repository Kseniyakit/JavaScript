const cleanTransactionsList = transactions => transactions
    .map(num => Number(num))
    .filter(num => isFinite(num))
    .map(num => "$" + num.toFixed(2));

    console.log(cleanTransactionsList([' 1.9 ', '16.4', 17, ' 1 dollar ']));

    