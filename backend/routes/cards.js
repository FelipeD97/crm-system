const express = require('express'),
router = express.Router(),
cardModel = require('../models/cardModel'),
bcrypt = require("bcryptjs");

router.get("/", async (req, res, next) => {
    const joinCards = await cardModel.joinCards();
    res.json(joinCards).status(200);
  })

  router.post("/addCard", async (req, res) => {
    const { full_name, exp_date, member_id } = req.body;
    const cardHash = bcrypt.hashSync(req.body.card_number, 8);
    const cvvHash = bcrypt.hashSync(req.body.cvv, 8);

    const response = await cardModel.addCard(full_name, cardHash, exp_date, cvvHash, member_id);
      res.sendStatus(200);
      console.log(response)
  });

  module.exports = router;