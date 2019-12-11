const express = require('express'),
router = express.Router(),
salesModel = require('../models/salesModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getSales = await salesModel.getSales();
    res.json(getSales).status(200);
  })
router.get('/inventory', async(req, res, next) => { 
  const getsInventory = await salesModel.getInventory();
  res.json(getsInventory).status(200);
})

router.post("/addsale", async (req, res) => {
  const { item_id, cost, member_id, employee_id } = req.body;

  const response = await salesModel.addSale(item_id, cost, member_id, employee_id);
  if (response.command === "INSERT" && response.rowCount >=1) {
    res.sendStatus(200);
  } else {
    res.send(`Please add ${item_id}`)
  }
})

module.exports = router;