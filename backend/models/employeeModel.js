const db = require('./conn');
bcrypt = require("bcryptjs");

class Employee {
    constructor(id, employee_name, email, phone, password) {
      this.id = id;
      this.employee_name = employee_name;
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
    static async addEmployee(employee_name, email, phone, password) {
      const query = `INSERT INTO employees (employee_name, email, phone, password) VALUES ($1, $2, $3, $4)`;
  
      try {
        const response = await db.result(query, [employee_name, email, phone, password]);
        return response;
      } catch (err) {
        return err.message;
      }
    }

    checkPassword(hashedPassword) {
      return bcrypt.compareSync(this.password, hashedPassword);
  }

    async login() {
      try {
          const response = await db.one(
              `SELECT 
                  id, 
                  employee_name,
                  phone,
                  password
                  FROM employees WHERE email = $1;`, 
          [this.email]);
          
          const isValid = this.checkPassword(response.password);

            if (!!isValid) {
                const { id, employee_name, phone } = response;
                return { isValid, id, employee_name, phone };
            } else {
                return { isValid };
            }

        } catch(err) {
            return err.message;
      }
    }
}

module.exports = Employee;