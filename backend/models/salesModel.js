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
    static async getInventory() {

      try {
          const response = await db.any(`SELECT * FROM Inventory;`);
          return response;
      } catch (error) {
          return error.message;

      }
  }
 
}

module.exports = Sales;