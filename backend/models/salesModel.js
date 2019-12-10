const db = require('./conn');

class Item {
    constructor(id, item_id,cost, photo, stock) {
      this.id = id;
      this.item_id = item_id;
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

module.exports = Item;