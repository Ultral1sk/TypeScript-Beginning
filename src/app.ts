const hobbies = ["pcgames", "programing"];
const activeHobbies = ["NBA"];

// console.log([...hobbies, ...activeHobbies])


const person = {
      firstName : 'Jovan',
      age : 30
}

// const copiedPerson = {...person}
// console.log(copiedPerson)



// accepting random number of arguments inside an array
// const add = (...numbers : number[]) => {
//       return numbers.reduce((curResult, curValue) => {
//             return curResult + curValue
//       }, 0 )
// }


// console.log(add(5,2,6,8))
// or we can go with the TUPLE option by setting the arguments to fixed lenght and value
// (...numbers : [number, number, number])


// const [ hobbyOne, hobbyTwo, ...remainingHobies ] = hobbies
// console.log(hobbyOne, hobbyTwo)

const { firstName, age } = person