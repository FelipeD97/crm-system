const db = require('./conn');

class Sales{
    constructor(id, item_id, member_id, employee_id) {
      this.id = id;
      this.item_id = item_id;
      this.member_id = member_id;
      this.employee_id = employee_id;
      
    }
  
    static async getSales() {
      try {
        const response = await db.any(`
        SELECT * FROM sales
        INNER JOIN inventory ON inventory.id = sales.item_id
        INNER JOIN members ON members.id = sales.member_id
        INNER JOIN employees ON employees.id = sales.employee_id;`);
        return response;
      } catch (err) {
        return err.message;
      }
    }

    static async addSale(item_id, member_id, employee_id) {
      const query = 
        `INSERT INTO sales (item_id, member_id, employee_id)
        VALUES ($1, $2, $3)
        `

      try {
        const response = await db.result(query, [item_id, member_id, employee_id]);

        return response
      } catch (err) {
        return err.message;
      }
    }
}

module.exports = Sales;