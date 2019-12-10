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
}

module.exports = Inventory;