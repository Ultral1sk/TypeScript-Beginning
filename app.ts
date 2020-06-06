/* Best option to when dealing with Objects in TypeScript */

// behind the scenes ADMIN receives 1, READ_ONLY receives number 2, etc..
enum Role { ADMIN, READ_ONLY, AUTHOR }
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR }
// enum Role { ADMIN = 'Admin', READ_ONLY = 100, AUTHOR }


const person = {
      name : "Jovan",
      age  : 29,
      hobbies : ['Sports', 'Cooking'],
      role : Role.ADMIN
};


if( person.role === Role.ADMIN) {
      console.log(`Thats true`)
}


// person.role.push('admin');
// person.role[1] = 10;




let favoriteActivities: string[];    // this tells typescript to create an array of strings
favoriteActivities = ["Sports" ]     // < -- This works because it expects an array
// favoriteActivities = "Sports"     // will throw an error because it is a single String not an Arrray of strings
// let favoriteActivities: any[];    // With the any keyword TypeScript  Says that this variable is ready to receive any value
                                     // but with that being said we are losing the TypeScript magic
// favoriteActivities = ["Sports", 1 ]   // working with the any keyword


// Here TypeScript wont complain because it understands the values(string) that we've passed form the array inside the object
for(const hobby of person.hobbies) {
      console.log(hobby.toUpperCase());
      // console.log(hobby.map())  < -- error because there are strings inside
}

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


