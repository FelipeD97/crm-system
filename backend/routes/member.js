const express = require('express'),
router = express.Router(),
memberModel = require('../models/memberModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getMember = await memberModel.getMember();
    res.json(getMember).status(200);
  })

router.post("/addmember", async (req, res) => {
  const { member_name, member_email, phone, age, status, waiver, contract, date_joined } = req.body;
  console.log(req.body)
  const response = await memberModel.addMember(member_name, member_email, phone, age, status, waiver, contract, date_joined );
  console.log(response)
  if (response.command === "INSERT"  && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send(`Please add ${member_name}`).status(409);
  }
});

router.put("/updateMember", async (req,res) => {
  const { id, member_name, email, phone, age, status, waiver, contract, date_joined } = req.body;
  const response = await memberModel.updateMember(id, member_name, email, phone, age, status, waiver, contract, date_joined);
  if (response.command === "UPDATE" && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send(`Could not update ${member_name} for id: ${id}`).status(409);
  }
});

module.exports = router;
