const contacts = [
{
    name:'Tom',
    phoneNumber: '666-66-66',
},
{
    name: 'John',
    phoneNumber: '555-55-55',
},
{
    name: 'Ann',
    phoneNumber: '333-33-33',
},
{
    name: 'Stephan',
    phoneNumber: '444-44-44',
},
];

const sortContacts = (contacts, isAsc=true) =>{
   if (!Array.isArray(contacts)){
       return null;
   }
    return contacts.sort((a,b) =>{
       if (isAsc){ return a.name.localeCompare(b.name);}
        else  {
       return b.name.localeCompare(a.name);}
        });
    
    
};
console.log(sortContacts(contacts, false));