class Department { 
//   private readyonly id: string;
//   priovate name : string;
//   private is only accessible from inside the class not from outside
// but if we still want to be private but still accessible from the other classes instead of PRIVATE we use PROTECTED
  protected employeess: string[] = [];

    constructor(private readonly id: string, public name: string )  { //<-- this is a shortcut from the previously written code
      // this.id = id;
      // this.name = n;
      }

    describe(this : Department) {
      //     console.log(`Department: ${this.name} with an id ${this.id}`);
    }

    addEmployee(employee: string) {
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
      constructor( id: string, public admins : string[] ) {
        super(id, 'IT');
            this.admins = admins;
      }
}

class AccountingDepartment extends Department {
      private lastReport: string;

      // this is used if we want to get a property of the class encapsulate it and add extra logic to it
      // in this case we take the private lastReport and we want to add extra logic whenever we acces it
      get mostRecentReport() {
            if(this.lastReport) {
                  return this.lastReport;

            }
            throw new Error(`No report found.`);
      }

      // with this we do the same but instead of getting a property we can set a new property encapsulate it and add extralogic to it
     
      set mostRecentReport(value: string) {
            if(!value){
                  throw new Error(`Plase pass in a valid value`)
            }
            this.addReport(value);
      }

      constructor( id: string, private reports: string[] ){
            super(id, 'Accounting');
            this.lastReport = reports[0]
      }

      addEmployee(name : string) {
            if(name === 'Max') {
                  return;
            }
            this.employeess.push(name)
      }

      addReport( text: string) {
            this.reports.push(text);
            this.lastReport = text
      }

      printReports() {
            console.log(this.reports)

      }
}

const it = new ITDepartment('d1', ['Jojo']) 
it.addEmployee('Max')
it.addEmployee('Manu')

it.describe()
it.name = 'NEW NAME'
it.printEmployeeInformation();
console.log(it)


const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = `Your end report please`   // <=== use set(setter)
console.log(accounting.mostRecentReport)                 // <=== use get(getter)

accounting.addEmployee(`Max`);
accounting.addEmployee(`JovanAdmin`);

accounting.addReport('Smthing went wrong...');
accounting.printReports()
accounting.printEmployeeInformation()