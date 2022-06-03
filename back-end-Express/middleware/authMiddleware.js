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
function authUser(req, res, next) {
    const a = req.header('accessToken')

    if (a == null) {

        res.status(403)
            console.log(a)

        return res.json({error : "You did not log in"})
      
    }else{
        next()
        console.log("OK") 
        console.log(req.user)
        console.log(a)
    }
  }

module.exports = {validateToken, authUser};

