const express = require('express'),
router = express.Router(),
employeeModel = require('../models/employeeModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getEmployee = await employeeModel.getEmployee();
    res.json(getEmployee).status(200);
  })

module.exports = router;