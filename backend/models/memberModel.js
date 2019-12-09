const db = require('./conn');

class Member {
    constructor(id, name, email, phone, age, status, waiver, contract, datejoined) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.age = age;
      this.status = status;
      this.waiver = waiver;
      this.contract = contract;
      this.datejoined = datejoined;
    }
  
    static async getMember() {
      try {
        const response = await db.any(`select * from members;`);
        return response;
      } catch (err) {
        return err.message;
      }
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

module.exports = Member;