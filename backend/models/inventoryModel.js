const db = require('./conn');

class Inventory {
    constructor(id, item,cost, photo, stock) {
      this.id = id;
      this.item = item;
      this.cost = cost;
      this.photo = photo;
      this.stock = stock;
      
    }
  
    static async getInventory() {
      try {
        const response = await db.any(`select * from inventory ORDER BY item ASC;`);
        return response;
      } catch (err) {
        return err.message;
      }
    }
    static async addInventory(item, cost, photo, stock) {
      const query = `INSERT INTO inventory ( item, cost, photo, stock) VALUES ($1, $2, $3, $4)`;
  
      try {
        const response = await db.result(query, [item, cost, photo, stock]);
        return response;
      } catch (err) {
        return err.message;
      }
    }
    static async updateInventory(id) {
      console.log(id);
      const query = 
      `UPDATE inventory SET stock = (SELECT stock FROM inventory WHERE id = ${id}) -1
      WHERE  id = ${id}`;

      try {
        const response = await db.one(query);
        return response;

      } catch (err) {
        return err.message;
      }
    }
}

module.exports = Inventory;