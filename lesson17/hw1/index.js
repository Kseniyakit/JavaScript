export const user = {
    firstName: 'John',
    secondName: 'Doe',
    getFullName() {
        return (`${this.firstName} ${this.secondName}`);
       
    },
    setFullName(fullName) {
      const arr = fullName.split(' ');
      this.firstName = arr[0];
      this.secondName = arr[1];
    }

}
