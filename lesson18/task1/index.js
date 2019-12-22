export const event = {
    guests: [
        { name: 'John', age: 16, email: 'john@server.com'},
        { name: 'Bill', age: 18, email: 'bill@server.com'},
    ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests
        .filter(({age}) => age >= 18)
        .map(({name, email}) => ({
            text: `Dear ${name}! ${this.message}`,
            email
        }));
    }
}
console.log(event.getInvitations());