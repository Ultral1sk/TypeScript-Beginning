// const names: Array<string> = [];   // string[] synonym of the syntax

// names[0].split(' ')


// // created a priomise which is gonna createa Promise constructor and will return its value to the variable
// // here if we hove on the variable we will see that generic and it is confused because it wont not know the value it'll recive
// const promise: Promise<string> = new Promise(( resolve, reject ) => {
//       setTimeout(() => {
//             resolve(`This is done..`)
//             // resolve(10)

//       }, 2000);
// })

// promise.then( data => {
//       data.split(" ");
      
// })

// here if we hover on the merge function we can see how these are merged
// with this addition of the generics whenever we try oacces smth inside this obj TypeScript will understand
// becauase we've specified it the value that it's returning
// with the generic types here we say that here can be and will be different kinds of values
function merge<T, U>( objA: T, objB: U) {
// // this won't work because obj is highly unspesific type
// function merge<T, U>( objA: object, objB: object ) {

      return Object.assign(objA, objB);
}

console.log(merge({name : 'joko'}, {age : 5}));

const mergedObj = merge({ name: 'Max', hobbies : ["Sports"] }, { age : 29 });
const mergedObj2 = merge({age: 10}, {greetings : 'papa'});

// typescript doesn't understand this because it doesn;t understand everyhthing
// here generics can help us
console.log(mergedObj.age);


