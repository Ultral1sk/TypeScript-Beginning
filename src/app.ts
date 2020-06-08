class Department {
  public name: string; // <-- public is default property to the key and it is also muatble from outside
  private employeess: string[] = [];

    constructor( n: string ) {
      this.name = n;
      }

    describe(this : Department) {
          console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string) {
          this.employeess.push(employee);
    }

    printEmployeeInformation() {
          console.log(this.employeess.length);
          console.log(this.employeess);
    }
}


const departmendAccounting = new Department(`accounting`) 
departmendAccounting.addEmployee('Max')
departmendAccounting.addEmployee('Manu')

// the class is still mutable from outside like this by accesing the property only
// what we need to do here is just make only one way of doing this, meaning manipulating the class through only one way
// because we don't want to have sideeffects meaning to update or affect the class unpurposly
// departmendAccounting.employeess[2] = "jovan"   // <-- we dont want this to be available we ned to make it private

departmendAccounting.describe()
departmendAccounting.printEmployeeInformation();
