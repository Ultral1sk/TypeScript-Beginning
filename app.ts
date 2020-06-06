/* Best option to when dealing with Objects in TypeScript */
const person = {
      name : "Jovan",
      age  : 29
};

console.log(person.name)


/* Another option  */
// const person: {} = {
//       name : "Jovan",
//       age  : 29
// };
// console.log(person.name)


/* Another option  */
// const person: object = {
//       name : "Jovan",
//       age  : 29
// };

// console.log(person.name)

/* The object can be specified in TypeScript but it is not neccessary */
// const person: {
//       name : string;
//       age  : number
// } =  {
//       name : 'Jovan',
//       age : 30
// }

// console.log(person.name)


