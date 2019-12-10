const express = require('express'),
router = express.Router(),
memberModel = require('../models/memberModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getMember = await memberModel.getMember();
    res.json(getMember).status(200);
  })


  router.post("/addMember", async (req, res) => {
    const { name, email, age, phone, status, waiver, contract, date_joined } = req.body;
    const response = await memberModel.addMember(name, email, age, phone, status, waiver, contract, date_joined);
      res.sendStatus(200);
  });

module.exports = router;