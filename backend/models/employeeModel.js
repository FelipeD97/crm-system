const db = require('./conn');
bcrypt = require("bcryptjs");

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
    static async addEmployee(name, email, phone, password) {
      const query = `INSERT INTO employees ( name, email, phone, password) VALUES ('${name}', '${email}', ${phone}, '${password}')`;
  
      try {
        const response = await db.result(query);
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
                  name,
                  phone,
                  password
                  FROM employees WHERE email = $1;`, 
          [this.email]);
          
          const isValid = this.checkPassword(response.password);

            if (!!isValid) {
                const { id, name, phone } = response;
                return { isValid, id, name, phone };
            } else {
                return { isValid };
            }

        } catch(err) {
            return err.message;
      }
    }
}

module.exports = Employee;