export const user = {
    firstName: 'John',
    secondName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.secondName}`;
       
    },
    setFullName(fullName) {
     let arr = fullName.split(" ");
     return this.firstName = arr[0];
     return this.secondName = arr[1];
    },

};
