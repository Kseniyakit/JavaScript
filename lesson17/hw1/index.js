export const user = {
    firstName: "John",
    lastName: "Doe",
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(fullname){
        const tempArr = fullname.split(" ");
        this.firstName = tempArr[0];
        this.lastName = tempArr[1];
    },
};
