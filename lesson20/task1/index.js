export class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    static createEmpty(){
        return new User('', null);
    };
    sayHi(){
        console.log(`Hi, I am ${this.name}`);
    };
    requerstNewPhoto(){
        console.log(`New photo request was sent for ${this.name}`);
    };
    setAge(value){
        if(value < 0) {
            return false;
        }
        this.age = value;
        if (value >= 25){
            this.requerstNewPhoto();
        }
        return value;
    };
}
const user1 = new User('John', 27);
console.log(user1);
console.log(user1.requerstNewPhoto());