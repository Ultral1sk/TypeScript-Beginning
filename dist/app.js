"use strict";
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
function merge(objA, objB) {
    // // this won't work because obj is highly unspesific type
    // function merge<T, U>( objA: object, objB: object ) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ["Sports"] }, { age: 30 });
const mergedObj2 = merge({ age: 10 }, { greetings: 'papa' });
// typescript doesn't understand this because it doesn;t understand everyhthing
// here generics can help us
console.log(mergedObj.name, mergedObj.age);
function countAndDescribe(element) {
    let desciptionText = 'Got no value.';
    if (element.length === 1) {
        desciptionText = `Got 1 Element`;
    }
    else if (element.length > 1) {
        desciptionText = `Got ${element.length} + elements`;
    }
    return [element, desciptionText];
}
console.log(countAndDescribe(["Jovan", 'Bora']));
console.log(countAndDescribe([]));
// console.log(countAndDescribe(10)) doesn't work
function extractAndConvert(obj, key) {
    return `Value : ${obj[key]}`;
}
console.log(extractAndConvert({ name: 'Jovan' }, 'name'));
function createCourseGoal(title, description, date) {
    // Partiual tells TypeSript that this is an object which in the end will be a CourseGoal
    // And it says that all the properties inside the CourseGoal are optional
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal; // <- with this we are gonna say that this is a real course goal not a partial one
}
// locking the array , can't manipulate the array at all, and it is not limited only to array
// can be usable  with objects or etc..
const names = ["Jovan", "cs:go"];
// names.push('N1GHTMARE');
// names.pop();
//# sourceMappingURL=app.js.map