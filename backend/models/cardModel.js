const db = require('./conn');

class Card {
    constructor(id, full_name, card_number, cvv, member_id) {
      this.id = id;
      this.full_name = full_name;
      this.card_number = card_number;
      this.cvv = cvv;
      this.member_id = member_id;
    }
  
    static async joinCards() {
        try {
            const response = await db.any(`
            SELECT * FROM members
            FULL JOIN cards ON member_id = members.id;
            `);
            return response;
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = Card;