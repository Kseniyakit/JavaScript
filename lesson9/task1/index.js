const users = {
    'John Doe': 19,
     'Tom': 17,
    'Bob': 18,
};
const getAdults = usersObj => {
    const usersArray = Object.entries(usersObj);
   const filteredUsersArray = usersArray
    .filter(user => user[1] >=18);
    const usersNames = filteredUsersArray
    .map(user => user[0]);
    return usersNames;
}
console.log(getAdults(users));

