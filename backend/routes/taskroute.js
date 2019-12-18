const express = require('express'),
router = express.Router(),
tasksModel = require('../models/taskmodel');

/* GET Tasks. */
router.get('/', async (req, res, next) => {
    const getTask = await tasksModel.getTasks();
    res.json(getTask).status(200);
  })


router.post("/addtask", async (req, res) => {
  const {task_info, employee_id} = req.body;
  console.log(req.body)
  const response = await tasksModel.addTask(task_info, employee_id);
  console.log(response)
  if (response.command === "INSERT"  && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send(`Please add ${task_info}`).status(409);
  }


});

module.exports = router;