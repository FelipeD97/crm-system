const express = require('express'),
router = express.Router(),
memberModel = require('../models/memberModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getMember = await memberModel.getMember();
    res.json(getMember).status(200);
  })

router.post("/addmember", async (req, res) => {
  const { name, email, phone, age, status, waiver, contract, date_joined } = req.body;
  console.log(req.body)
  const response = await memberModel.addMember(name, email, phone, age, status, waiver, contract, date_joined );
  console.log(response)
  if (response.command === "INSERT"  && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send(`Please add ${name}`).status(409);
  }
});

module.exports = router;
