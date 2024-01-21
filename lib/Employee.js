// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
   this.name = name;
   this.id = id;
   this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return 'Employee'
  }
}
// const employee = new Employee('John',35,'john@gmail.com')
// console.log(employee);

module.exports = Employee;