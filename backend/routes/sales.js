const express = require('express'),
router = express.Router(),
salesModel = require('../models/salesModel'),
inventoryModel = require('../models/inventoryModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getSales = await salesModel.getSales();
    res.json(getSales).status(200);
  })

router.post("/addsale", async (req, res) => {
  const { item_id, member_id, employee_id, date_sold } = req.body;
  
  const update = await inventoryModel.updateInventory(item_id)
  const response = await salesModel.addSale(item_id, member_id, employee_id, date_sold);
  
  if (response.command === "INSERT" && response.rowCount >=1) {
    res.sendStatus(200, update, response);
  } else {
    res.send(`Please add ${item_id}`)
  }
})

module.exports = router;