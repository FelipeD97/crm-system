const db = require('./conn');

class Member {
    constructor(id, name, email, phone, age, status, waiver, contract, date_joined)  {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.age = age;
      this.status = status;
      this.waiver = waiver;
      this.contract = contract;
      this.date_joined = date_joined;
      this.card_id= card_id};
    
  
    static async getMember() {
      try {
        const response = await db.any(`select * from members;`);
        return response;
      } catch (err) {
        return err.message;
      }
    }
    
    static async addMember(name, email, phone, age, status, waiver, contract, date_joined) {
        const query = `INSERT INTO members (name, email, phone, age, status, waiver, contract, date_joined) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
    
        try {
          const response = await db.result(query, [name, email, phone, age, status, waiver, contract, date_joined]);
          return response;
        } catch (err) {
          return err.message;
        }
      }
}

module.exports = Member;