const db = require('./conn');

class Sales{
    constructor(id, item_id, member_id, employee_id, date_sold) {
      this.id = id;
      this.item_id = item_id;
      this.member_id = member_id;
      this.employee_id = employee_id;
      this.date_sold = date_sold
      
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

    static async addSale(item_id, member_id, employee_id, date_sold) {
      const query = 
        `INSERT INTO sales (item_id, member_id, employee_id, date_sold)
        VALUES ($1, $2, $3, $4)
        `

      try {
        const response = await db.result(query, [item_id, member_id, employee_id, date_sold]);

        return response
      } catch (err) {
        return err.message;
      }
    }
}

module.exports = Sales;