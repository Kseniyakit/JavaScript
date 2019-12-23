function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log(`hi, I am ${this.name}`);
    };
    this.requestNewPhoto = function(){
        console.log(`New photo request was sent for ${this.name}`);
    };
    this.setAge = function(age) {
        if(age<0) return false;
        if(age >= 25) {
            console.log(`New photo request was sent for ${this.name}`);
        };
        this.age = age;
        return age;
    }
}
const user1 = new User('Tom', 28);
console.log(user1);
user1.setAge(29);