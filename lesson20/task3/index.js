export class Wallet {
    constructor(){
        this._balance = 0;
    }
    getBalance(){
        return this._balance;
    }
    deposit(amount){
        this._balance += amount;
    }
    withwraw(amount){
        if (amount > this._balance){
            console.log('No enough funds');
            return;
        }
        this._balance -= amount;
    }
}
const wallet1 = new Wallet();
console.log(wallet1.getBalance());
wallet1.deposit(45);
console.log(wallet1.getBalance());
wallet1.withwraw(100);
console.log(wallet1.getBalance());
