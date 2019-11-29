let sum = 0;
let division = 0;
let remain = 0;
for(let i = 1; i<=1000; i++){
    sum += i;
   
}
division = Math.trunc(sum/1234);
remain = sum % 1234;
division > remain ? console.log(true) : console.log(false);