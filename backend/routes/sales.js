const express = require('express'),
router = express.Router(),
salesModel = require('../models/salesModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getSales = await salesModel.getSales();
    res.json(getSales).status(200);
  })
router.get('/inventory', async(req,res,next)=>{
  const getsInventory = await salesModel.getInventory();
  res.json(getsInventory).status(200);
})

module.exports = router;