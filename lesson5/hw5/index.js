function findDivCount(a, b, n){
   
    for (let i =a; i<=b; i++){
        if (i%n===0) {
            return(i);
        }
       else { 
           continue;}
    }
}