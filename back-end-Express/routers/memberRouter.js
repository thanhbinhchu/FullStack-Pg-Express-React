const express = require('express')
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')

const {validateToken} = require('../middleware/authMiddleware')

const router = express.Router()

const { members } = require('../models')

router.get("/", async(req,res) => {
    const listOfMember = await members.findAll()
    res.json(listOfMember)
});

router.post("/register", async(req,res) => {
    const {first_name, last_name, username, email, password} = req.body;
    bcrypt.hash(password,10).then((hashPassword) => {
        members.create({
            first_name: first_name,
            last_name:last_name,
            username : username,
            email : email,
            password : hashPassword,
        });

    })
    
    res.json("New member was created");
})

router.post("/login", async(req,res) => {
    const {username , password} = req.body;

    const user = await members.findOne({where : {username : username}});

    if (!user)
        res.json({error:"User does not exist"})
    ;

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong Username And Password Combination" });

        const accessToken = sign({
            username : user.username , id:user.id
        }, "importantsecret");
            
            res.json(accessToken);
    }
    )

})

module.exports = router;