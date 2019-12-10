const db = require('./conn'),
bcrypt = require("bcryptjs");

class Card {
    constructor(id, full_name, card_number, cvv, member_id) {
      this.id = id;
      this.full_name = full_name;
      this.card_number = card_number;
      this.cdv = cdv;
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

    static async addCard(full_name, card_number, exp_date, cdv, member_id) {
            const query = `INSERT INTO cards 
                (full_name, card_number, exp_date, cdv, member_id) 
                VALUES ($1, $2, $3, $4, $5)`
            try {
                const response = await db.one(query, [full_name, card_number, exp_date, cdv, member_id])
                return response;
            }
         catch (err) {
          return err.message;
        }
    }
}

module.exports = Card;