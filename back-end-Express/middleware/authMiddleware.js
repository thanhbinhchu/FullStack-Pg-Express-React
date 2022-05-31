const { verify } = require('jsonwebtoken')

const validateToken = (req, res, next ) => {
    const accessToken = req.header('accessToken')

    if(!accessToken){
        return res.json({error : "You did not log in"})

    }

    try{
        const validToken = verify(accessToken, "importantsecret");

        if (validToken){
            return next()
        }

    }catch(err){
        return res.json({err : err})

    }
}

module.exports = {validateToken};

