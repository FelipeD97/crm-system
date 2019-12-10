const db = require('./conn');

class Sales {
    constructor(id, item_id, cost, member_id) {
      this.id = id;
      this.item_id = item_id;
      this.cost = cost;
      this.member_id = member_id;
      
    }
  
    static async getSales() {
      try {
        const response = await db.any(`select * from sales;`);
        return response;
      } catch (err) {
        return err.message;
      }
    }

    static async addSale() {
      try {
        const response = await db.any(`
        SELECT inventory.id, members.id, employees.id
        FULL JOIN sales ON item_id = inventory.id;
        `);
        return response
      } catch (err) {
        return err.message;
      }
    }
}

module.exports = Sales;