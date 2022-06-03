const express = require('express')

const {validateToken, authUser} = require('../middleware/authMiddleware')

const router = express.Router()
const { transaction } = require('../models')

router.get("/", authUser, async(req,res) => {

    const listOfTransaction = await transaction.findAll()
        
    res.json(listOfTransaction)

});


module.exports = router;
