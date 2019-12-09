const db = require('./conn');

class Member {
    constructor(id, name, email, dob, datejoined) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.age = age;
      this.phone = phone;
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
}

module.exports = Member;