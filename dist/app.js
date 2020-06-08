"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   private readyonly id: string;
        //   priovate name : string;
        //   private is only accessible from inside the class not from outside
        // but if we still want to be private but still accessible from the other classes instead of PRIVATE we use PROTECTED
        this.employeess = [];
        // this.id = id;
        // this.name = n;
    }
    describe() {
        //     console.log(`Department: ${this.name} with an id ${this.id}`);
    }
    addEmployee(employee) {
        this.employeess.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employeess.length);
        console.log(this.employeess);
    }
}
//even though the class is empty with the EXTENDS keyword we are gonna inherit everythig that class has
// but when we want to get particular stuff we do it through the constructor and also by calling super() 
class ITDepartment extends Department {
    // this is passed to super
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employeess.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Jojo']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.addEmployee(`Max`);
accounting.addEmployee(`JovanAdmin`);
accounting.addReport('Smthing went wrong...');
accounting.printReports();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map