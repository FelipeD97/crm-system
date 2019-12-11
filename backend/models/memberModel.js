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


    static async addMember(name, email, phone, age, status, waiver, contract, date_joined, card_id) {
        const query = `INSERT INTO members (name, email, age, phone, status, waiver, contract, date_joined) VALUES ('${name}', '${email}', ${age},'${status}', ${phone},'${status}','${waiver}', '${date_joined}')`
    
        try {
          const response = await db.result(query, [name, email, phone, age, status, waiver, contract, date_joined]);
          return response;
        } catch (err) {
          return err.message;
        }
      }
}

module.exports = Member;