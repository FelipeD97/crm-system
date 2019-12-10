const express = require('express'),
router = express.Router(),
inventoryModel = require('../models/inventoryModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getInventory = await inventoryModel.getInventory();
    res.json(getInventory).status(200);
  })
  router.post("/", async (req, res) => {
    const { item, cost, photo,stock } = req.body;
    console.log(req.body)
    const response = await inventoryModel.addEntry(item, cost, photo,stock );
    if (response.command === "INSERT" && response.rowCount >= 1) {
      res.sendStatus(200);
    } else {
      res.send(`Please add ${item}`).status(409);
    }
  });

module.exports = router;
