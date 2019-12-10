const express = require('express'),
router = express.Router(),
cardModel = require('../models/cardModel');

router.get("/", async (req, res, next) => {
    const joinCards = await cardModel.joinCards();
    res.json(joinCards).status(200);
  })

  module.exports = router;