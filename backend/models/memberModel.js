const db = require('./conn');

class Member {
    constructor(id, member_name, member_email, phone, age, status, waiver, contract, date_joined)  {
      this.id = id;
      this.member_name = member_name;
      this.member_email = member_email;
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
    
    static async addMember(member_name, member_email, phone, age, status, waiver, contract, date_joined) {
        const query = `INSERT INTO members (member_name, member_email, phone, age, status, waiver, contract, date_joined) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
    
        try {
          const response = await db.result(query, [member_name, member_email, phone, age, status, waiver, contract, date_joined]);
          return response;
        } catch (err) {
          return err.message;
        }
      }
    
    static async updateMember(id, name, email, phone, age, status, waiver, contract, date_joined){
      const query = `UPDATE members set (name, email, phone, age, status, waiver, contract, date_joined) = ($1,$2,$3,$4,$5,$6,$7,$8) where id = ${id})`
    
        try {
          const response = await db.result(query, [name, email, phone, age, status, waiver, contract, date_joined]);
          return response;
        } catch (err) {
          return err.message;
        }
      }
    }

module.exports = Member;