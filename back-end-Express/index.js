const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require('./models')


const memberRouter = require('./routers/memberRouter')
app.use("/members", memberRouter);





db.sequelize.sync().then(() => {

    app.listen(4000, () => {
        console.log("Welcome to port 4000")
    });

});

