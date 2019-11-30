function sortAsc(array){
    for (let i=0; i<array.length; i++){
    for (let j=0; j<array.length; j++){
        if (array[i]<array[j]){
           let bols = array[i];
           array [i]= array [j];
           array [j]= bols;} 
    }
   }  
   return array;
} 

function sortDes(array){
    for (let i=0; i<array.length; i++){
    for (let j=0; j<array.length; j++){
        if (array[i]>array[j]){
           let bols = array[i];
           array [i]= array [j];
           array [j]= bols;} 
    }
   }  
   return array;
} 


