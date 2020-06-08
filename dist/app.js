"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employeess = [];
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear) <== This is not accessible from the constructor or the newlycreate instances
        // but there is a way if we want to acces it by calling the name of the Class in this case like (Department.fiscalYear)
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employeess.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employeess.length);
        console.log(this.employeess);
    }
}
//   private readyonly id: string;
//   priovate name : string;
//   private is only accessible from inside the class not from outside
// but if we still want to be private but still accessible from the other classes instead of PRIVATE we use PROTECTED
Department.fiscalYear = 2020;
//even though the class is empty with the EXTENDS keyword we are gonna inherit everythig that class has
// but when we want to get particular stuff we do it through the constructor and also by calling super() 
class ITDepartment extends Department {
    // this is passed to super
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log(`IT DEPARTMENT - ID ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // this is used if we want to get a property of the class encapsulate it and add extra logic to it
    // in this case we take the private lastReport and we want to add extra logic whenever we acces it
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error(`No report found.`);
    }
    // with this we do the same but instead of getting a property we can set a new property encapsulate it and add extralogic to it
    set mostRecentReport(value) {
        if (!value) {
            throw new Error(`Plase pass in a valid value`);
        }
        this.addReport(value);
    }
    describe() {
        console.log(`IT ACCOUNTING DEPARTNEBT - ID ${this.id}`);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employeess.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('joko');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Jojo']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = `Your end report please`; // <=== use set(setter)
console.log(accounting.mostRecentReport); // <=== use get(getter)
accounting.addEmployee(`Max`);
accounting.addEmployee(`JovanAdmin`);
accounting.addReport('Smthing went wrong...');
accounting.describe();
// accounting.printReports()
// accounting.printEmployeeInformation()
//# sourceMappingURL=app.js.map