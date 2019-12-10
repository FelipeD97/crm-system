const db = require('./conn');

class Item {
    constructor(id, item_id,cost, photo, stock) {
      this.id = id;
      this.item_id = item_id;
      this.cost = cost;
      this.photo = photo;
      this.stock = stock;
      
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
        INSERT INTO sales(item_id, cost, member_id, employee_id)
        VALUES ($1, $2, $3, $4)

        `);
        return response
      } catch (err) {
        return err.message;
      }
    }
}

module.exports = Item;