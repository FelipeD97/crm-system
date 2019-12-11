const express = require('express'),
router = express.Router(),
employeeModel = require('../models/employeeModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getEmployee = await employeeModel.getEmployee();
    res.json(getEmployee).status(200);
  })

router.get("/login", async (req, res, next) => {
  const { email, password } = req.body;

  const employee = new employeeModel(null, null, email, null, password);
  const response = await employee.login();

  if (!! response.isValid) {
    const { id, name, phone } = response;
    req.sessions.is_logged_in = true;
    req.session.name = name;
    req.session.phone = phone;
    req.session.employee_id = id;

    res.status(200).redirect("/");
  }
});

router.post("/addemployee", async (req, res) => {
  const { name, email, phone, password} = req.body;
  console.log(req.body)
  const response = await employeeModel.addEmployee(name, email, phone, password );
  console.log(response)
  if (response.command === "INSERT"  && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send(`Please add ${name}`).status(409);
  }


});

module.exports = router;