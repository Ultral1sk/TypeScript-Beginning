"use strict";
//this is also valid
// interface ElevatedEmployee extends Employee, Admin {}
const e1 = {
    name: 'Max',
    privileges: ['Create-Server'],
    startDate: new Date,
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmpoyeeInformation(emp) {
    // here typescript will throw us an error because privileges is being used only in one of t he types
    // in this case the Admin, and that is why it is complaining.
    // in order this code to work we need to check whenever prrivileges is available in the types use itt
    // and in this case we can't pass this eerror with the typeof as we did in the prevoius example because the type of in this case is an object
    // we can not check  if the type of emp is Employee also because that is comming from TypeScript and not javascrit typeof emp === 'Employee'
    // what we can check only is the javascript types : string, object, number, boolean
    // a workaround to this is to use the IN keyword which is comming from javascript.
    // this translates if the 'privileges' property is in emp
    if ('privileges' in emp) {
        console.log(`Privileges ${emp.privileges}`);
    }
    if ('startDate' in emp) {
        console.log(`startDate ${emp.startDate}`);
    }
    console.log(`name ${emp.name}`);
}
// printEmpoyeeInformation(e1)
printEmpoyeeInformation({ name: 'Jojo', startDate: new Date() });
class Car {
    drive() {
        console.log(`Driving...`);
    }
}
class Truck {
    drive() {
        console.log(`Driving a truck...`);
    }
    loadCargo(amount) {
        console.log(`loading the cargo... ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
    // if(`loadCargo` in vehicle) {
    //       vehicle.loadCargo(1000);
    // }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log(`Moving speed ${speed}`);
    // console.log(`Moving with speed ${animal.runningSpeed}`)
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// as we can see here eventhough we target the paragraph element through it's id 
// typeScript still can't figure out which specific element this is
// like this typescripot will know which element we have selected previously and it wont complain
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const userInputElement = document.getElementById("user-input");
const paragraph = document.getElementById('msg-output');
userInputElement.value = 'Hi There';
//# sourceMappingURL=app.js.map