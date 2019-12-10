const express = require('express'),
router = express.Router(),
memberModel = require('../models/memberModel');

/* GET Members. */
router.get('/', async (req, res, next) => {
    const getMember = await memberModel.getMember();
    res.json(getMember).status(200);
  })


  // router.post("/", async (req, res) => {
  //   const newmember= { name, email, age, phone, status, waiver, contract, date_joined } = req.body;
  //   const response = await memberModel.addMember(name, email, age, phone, status, waiver, contract, date_joined);
  //     res.sendStatus(200);
  // });
  router.post('/',(req, res, next)=>{
    const newMember= {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        phone: req.body.phone,
        status: req.body.status,
        waiver: req.body.waiver,
        contract: req.body.contract,
        date_joined: req.body.date_joined
    };
    getMember.push(newMember);
    res.json(getMember)
    })

router.get("/membercards", async (req, res, next) => {
  const joinCards = await memberModel.joinCards();
  res.json(joinCards).status(200);
})


module.exports = router;
