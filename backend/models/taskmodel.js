const db = require('./conn');

class Tasks{
    constructor(id, task_info, employee_id) {
      this.id = id;
      this.task_info = task_info;
      this.employee_id = employee_id;
      
    }
  
    static async getTasks() {
      try {
        const response = await db.any(`
        SELECT * FROM tasks
        INNER JOIN employees ON employees.id = tasks.employee_id;`);
        return response;
      } catch (err) {
        return err.message;
      }
    }

    static async addTask( task_info, employee_id) {
      const query = 
        `INSERT INTO tasks (task_info, employee_id)
        VALUES ($1, $2)
        `

      try {
        const response = await db.result(query, [ task_info, employee_id]);

        return response
      } catch (err) {
        return err.message;
      }
    }
}

module.exports = Tasks;