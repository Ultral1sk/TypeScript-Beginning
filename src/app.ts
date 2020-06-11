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
function merge<T extends object, U extends object>( objA: T , objB: U) {
// // this won't work because obj is highly unspesific type
// function merge<T, U>( objA: object, objB: object ) {

      return Object.assign(objA, objB);
}


const mergedObj = merge({ name: 'Max', hobbies : ["Sports"] }, { age : 30 } );
const mergedObj2 = merge({age: 10}, {greetings : 'papa'});

// typescript doesn't understand this because it doesn;t understand everyhthing
// here generics can help us
console.log(mergedObj.name, mergedObj.age);

interface Lengthy {
      length: number;
}

    
function countAndDescribe<T extends Lengthy>( element: T ): [T, string] {
      let desciptionText = 'Got no value.';
      
      if( element.length === 1 ) {
            desciptionText = `Got 1 Element`;

      } else if ( element.length > 1) {
            desciptionText =  `Got ${element.length} + elements`;
      }
      return [element, desciptionText]
}

console.log(countAndDescribe(["Jovan", 'Bora']))
console.log(countAndDescribe([]))
// console.log(countAndDescribe(10)) doesn't work


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
      return `Value : ${obj[key]}` ;   
}

console.log(extractAndConvert({name : 'Jovan'}, 'name'))




// class DataStorage<T extends string | string | number | boolean> {
//       private data: T[] = [];

//       // here TS complains because the item is of type ANY so we need to be more specific
//       addItem(item: T) {
//             this.data.push(item);

//       }

//       removeItem(item: T) {  
//             if( this.data.indexOf(item) === -1 ) {
//                   return;
//             }
//            this.data.splice(this.data.indexOf(item), 1);
//       }

//       getItems() {
//             return [...this.data];
//       }
// }

// const textStorage = new DataStorage<string>();
// //textStorage.addItem(10); <-- error because we said we want string
// textStorage.addItem('Max');
// textStorage.addItem('Manu');
// textStorage.removeItem('Max');
// console.log(textStorage.getItems())


// const numberStorage = new DataStorage<number>();


interface CourseGoal {
      title: string;
      description: string;
      completeUntil : Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
      // Partiual tells TypeSript that this is an object which in the end will be a CourseGoal
      // And it says that all the properties inside the CourseGoal are optional
      let courseGoal: Partial<CourseGoal>  = {}
      
      courseGoal.title = title;
      courseGoal.description = description;
      courseGoal.completeUntil = date;

      return courseGoal as CourseGoal;  // <- with this we are gonna say that this is a real course goal not a partial one
}

// locking the array , can't manipulate the array at all, and it is not limited only to array
// can be usable  with objects or etc..
const names: Readonly<string[]> = ["Jovan", "cs:go"];
// names.push('N1GHTMARE');
// names.pop();
