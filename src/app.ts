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