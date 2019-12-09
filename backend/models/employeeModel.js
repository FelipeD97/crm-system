const db = require('./conn');

class Employee {
    constructor(id, name, email, phone, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.password = password;
    }
  
    static async getEmployee() {
      try {
        const response = await db.any(`select * from employees;`);
        return response;
      } catch (err) {
        return err.message;
      }
    }
}

module.exports = Employee;