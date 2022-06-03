const express = require('express')

const {validateToken, authUser } = require('../middleware/authMiddleware')

const router = express.Router()

const { wallets } = require('../models')

router.get("/:id",validateToken, async(req,res) => {
    const id = req.params.id
    const wallet_person = await wallets.findByPK(id)
    res.json(wallet_person)
});



module.exports = router;
