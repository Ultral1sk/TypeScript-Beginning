// this is not an object created it is a TYPE this could have been created with INTERFACES
type Admin = {
      name : string;
      privileges : string[];
}
//interface
type Employee = {
      name: string;
      startDate: Date  // <- date is a type in Typescript
}


// now this result a new object type that must have both types
type ElevatedEmployee = Admin & Employee

//this is also valid
// interface ElevatedEmployee extends Employee, Admin {}
const e1: ElevatedEmployee = {
      name: 'Max',
      privileges: ['Create-Server'],
      startDate: new Date,
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric 

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: Combinable, b: Combinable) {
      if( typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
      }

      return a + b
}

const result = add('Jovan', '5');

const fetchedUserData = {
      id: 'u1',
      name: 'Max',
      // job: { title: 'CEO', description: 'My own business'}
}

// here we can see if the property is available inside the object TS wont complain
// console.log(fetchedUserData.job)
// it checks step by step like an if statement if fetchUserData exits, then it'll continue if not it wont
// console.log(fetchedUserData?.job?.title)

const userInput = '';

// if this is null of undefined only these two values then we use the "DEFAULT" which is the fallback else show the data from userInput
const storedData = userInput ?? "DEFAULT"


// type Admin = {
//       name : string;
//       privileges : string[];
// }
// //interface
// type Employee = {
//       name: string;
//       startDate: Date  // <- date is a type in Typescript
// }

// Unknown Type is either one of them
// type UnknownEmployee = Employee | Admin;

// function printEmpoyeeInformation( emp: UnknownEmployee ) {
//       // here typescript will throw us an error because privileges is being used only in one of t he types
//       // in this case the Admin, and that is why it is complaining.
//       // in order this code to work we need to check whenever prrivileges is available in the types use itt
//       // and in this case we can't pass this eerror with the typeof as we did in the prevoius example because the type of in this case is an object
//       // we can not check  if the type of emp is Employee also because that is comming from TypeScript and not javascrit typeof emp === 'Employee'
//       // what we can check only is the javascript types : string, object, number, boolean
//       // a workaround to this is to use the IN keyword which is comming from javascript.
//       // this translates if the 'privileges' property is in emp
//       if( 'privileges' in emp ) {
//             console.log(`Privileges ${emp.privileges}`)

//       } 
//       if ('startDate' in emp) {
//             console.log(`startDate ${emp.startDate}`)

//       }

//       console.log(`name ${emp.name}`)

// }
// // printEmpoyeeInformation(e1)
// printEmpoyeeInformation({ name : 'Jojo', startDate:  new Date() })


// class Car {
//       drive() {
//             console.log(`Driving...`);
//       }
// }

// class Truck {
//       drive() {
//             console.log(`Driving a truck...`);
//       }

//       loadCargo(amount: number) {
//             console.log(`loading the cargo... ${amount}` );
//       }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck()

// function useVehicle ( vehicle: Vehicle) {
//       vehicle.drive();
//       if(vehicle instanceof Truck) {
//             vehicle.loadCargo(1000);
//       }

//       // if(`loadCargo` in vehicle) {
//       //       vehicle.loadCargo(1000);
//       // }
// }

// useVehicle(v1);
// useVehicle(v2);


// interface Bird {
//       type : 'bird'; 
//       flyingSpeed: number;
      
// }

// interface Horse {
//       type : 'horse';
//       runningSpeed: number;
// }

// type Animal = Bird | Horse

// function moveAnimal(animal: Animal) {
      
//      let speed;

//      switch(animal.type) {
//            case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//             case 'horse':
//             speed = animal.runningSpeed;
//      }
//      console.log(`Moving speed ${speed}`)
//       // console.log(`Moving with speed ${animal.runningSpeed}`)

// }

// moveAnimal({ type: 'bird', flyingSpeed : 10})

// // as we can see here eventhough we target the paragraph element through it's id 
// // typeScript still can't figure out which specific element this is
// // like this typescripot will know which element we have selected previously and it wont complain
// const paragraph = document.getElementById('msg-output');

// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// const userInputElement = document.getElementById("user-input"); 

// if( userInputElement) {
//       (userInputElement as HTMLInputElement).value = 'Hi There';
// }


// // this is really good and flexible when we are building a form and we want to throw errors
// // but we also don't know how many properties for error or success or other msgs we will have
// // so we build an interface that is going to be flexible for us
// // and we can use that for every form in our website
// interface ErrorContainer {  // { email : 'Not a valid email', username : 'must start with character'}
//       //in this case we are creating a interface for an object that is going to have flexible keys
//       // with this syntax we are saying any key with a value of string in the object interface will be alloed
//       //  with this we are saying i don't know the property name and i dont know how many propertis the object of this interface will contain
//       //  i just know that every property that is going to be added to this object must have a property name that is going to be interpreted as a string and the value
//       //  for that property must be a strgin]
//       // we can also add predefined property here

//       // [prop: string]: string
//       [key: string]: string
// }

// const errorBag: ErrorContainer = {
//       // email : 1 <-- error because we want string as a value BUT!
//       // [key: number]: string   <- this is also valid for the exampl under because one can be converted as a number also
//       // 1 : 'Not a valid email' <- this is valid because number 1 here  can be concatinated as a string
//       email: 'Not a valid email', // <- this is valid because everythign that can be converted in a string is valid to this interface\
//       username : 'Must Start with a capital character'
// }