const array = [5,8,4,1,0,45,12,99,24];

function sortDes(array){
    for (i=0; i<array.length; i++){
    for (j=0; j<array.length; j++){
        if (array[i]>array[j]){
           let bols = array[i];
           array [i]= array [j];
           array [j]= bols;} 
    }
   }  
   return array;
} 
console.log(sortDes(array));

function sortAsc(array){
    for (i=0; i<array.length; i++){
    for (j=0; j<array.length; j++){
        if (array[i]<array[j]){
           let bols = array[i];
           array [i]= array [j];
           array [j]= bols;} 
    }
   }  
   return array;
} 
console.log(sortAsc(array));