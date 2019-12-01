const flatArray = arr => arr.reduce((acc, elem) => 
acc.concat(elem),[]);;
flatArray ([3,1,[100,9]]);