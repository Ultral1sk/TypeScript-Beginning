"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employeess = [];
    }
    describe() {
        console.log(`Department: ${this.name} with an id ${this.id}`);
    }
    addEmployee(employee) {
        this.employeess.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employeess.length);
        console.log(this.employeess);
    }
}
const departmendAccounting = new Department('d1', `accounting`);
departmendAccounting.addEmployee('Max');
departmendAccounting.addEmployee('Manu');
// the class is still mutable from outside like this by accesing the property only
// what we need to do here is just make only one way of doing this, meaning manipulating the class through only one way
// because we don't want to have sideeffects meaning to update or affect the class unpurposly
// departmendAccounting.employeess[2] = "jovan"   // <-- we dont want this to be available we ned to make it private
departmendAccounting.describe();
departmendAccounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map