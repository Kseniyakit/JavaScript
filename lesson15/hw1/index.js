
export const createCalculator = () =>{
    let result = 0;
    let num = 1;
    function add(num) {
        return result += num;
    };
    function decrease (num){
        return result -=num;
    };
    function reset() {
        return result = 0;
    };
    function getMemo(){
        return result;
    };
    return {
        add,
        decrease,
        reset,
        getMemo
    };
}
/*  console.log(createCalculator()); 
let counter = createCalculator();
let result = counter.add(4);
console.log(result); */