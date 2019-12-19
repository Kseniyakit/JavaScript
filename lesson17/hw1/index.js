const user = {
    firstName: 'John',
    secondName: 'Doe',
    getFullName() {
        return (`${this.firstName} ${this.secondName}`);
       
    },
    setFullName() {
        const firstName = prompt(this.firstName);
        const secondName = prompt(this.secondName);
    }

}
console.log(user.getFullName());
user.setFullName();
