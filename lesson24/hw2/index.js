
const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
export const studentsBirthDays = students =>{
    let birthObj = {}
    let studentsArray = [...students];
    studentsArray
    .sort((a, b) => new Date(a.birthDate) - new Date(b.birthDate))
    .map(i =>{
        if (birthObj[months[new Date(i.birthDate).getMonth()]]== undefined){
            birthObj[months[new Date(i.birthDate).getMonth()]] = [];
        }
        birthObj[months[new Date(i.birthDate).getMonth()]].push(i.name);
    }); 
  
    return birthObj; 
 
}

 const students = [
    {
         name: 'Tom',
          birthDate: '01/15/2010',
         },
         {
            name: 'Klara',
             birthDate: '10/11/2000',
         },
       {
            name: 'Ann',
             birthDate: '03/02/1999',
         },
         {
            name: 'Bob',
          birthDate: '03/11/2001',
        },
       {
           name: 'Sam',
            birthDate: '04/09/2003',
      },
       {
            name: 'Andrew',
            birthDate: '02/09/1998',
      },
 ];

 console.log(studentsBirthDays(students));