const express = require('express'),
router = express.Router(),
inventoryModel = require('../models/inventoryModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getInventory = await inventoryModel.getInventory();
    res.json(getInventory).status(200);
  })


module.exports = router;