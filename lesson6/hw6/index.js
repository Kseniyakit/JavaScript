const clients = ["John","Adam", "Max"];
const balances = [30, 40, 50];
const client = "Adam";
const amount = 20;

function withdraw(clients, balances, client, amount){
   for(let i=0; i<clients.length; i++){
       if(clients[i]==client){
           if (balances[i]>amount) return (balances[i]-amount)
           else return (-1);
       }
   }
}
console.log(withdraw(clients, balances, client, amount));