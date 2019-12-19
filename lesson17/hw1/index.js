export const user = {

    getFullName() {
        return `${this.firstName} ${this.secondName}`;
       
    },
    setFullName(fullName) {
     let arr = fullName.split(' ');
      this.firstName = arr[0];
      this.secondName = arr[1];
    },

};
