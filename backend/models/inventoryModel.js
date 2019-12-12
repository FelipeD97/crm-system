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
        const response = await db.any(`select * from inventory;`);
        return response;
      } catch (err) {
        return err.message;
      }
    }
    static async addInventory(item, cost, photo, stock) {
      const query = `INSERT INTO inventory ( item, cost, photo, stock) VALUES ('${item}', ${cost}, '${photo}', ${stock})`;
  
      try {
        const response = await db.result(query);
        return response;
      } catch (err) {
        return err.message;
      }
    }
    static async updateInventory(id, stock) {
      const query = 
      `UPDATE inventory SET stock = ${stock}
      WHERE  id = ${id}`;

      try {
        const response = await db.result(query, [id, stock]);
        return response;

      } catch (err) {
        return err.message;
      }
    }
}

module.exports = Inventory;