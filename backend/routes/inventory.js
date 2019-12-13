const express = require('express'),
router = express.Router(),
inventoryModel = require('../models/inventoryModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getInventory = await inventoryModel.getInventory();
    res.json(getInventory).status(200);
  })
  // router.post("/", async (req, res) => {
  //   const { item, cost, photo,stock } = req.body;
  //   console.log(req.body)
  //   const response = await inventoryModel.addInventory(item, cost, photo,stock );
  //   if (response.command === "INSERT" && response.rowCount >= 1) {
  //     res.sendStatus(200);
  //   } else {
  //     res.send(`Please add ${item}`).status(409);
  //   }

  // })
  // router.put('/updateInventory', async (req, res) => {
  //   const { id } = req.body;
  //   const response = await inventoryModel.updateInventory(id);
  //   if (response.command === "UPDATE" && response.rowCount >= 1) {
  //     res.sendStatus(200);
  //   } else {
  //     res.send(`Could not update ${stock} for id: ${id}`).status(409);
  //   }
  // });

module.exports = router;
