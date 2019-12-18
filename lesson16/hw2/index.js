export default foo = 1; 

function bar() { 
    if (!foo) { 
        let foo = 10; 
        console.log(foo);
    } 

    return foo;
   
}
var foo = bar();
