const { getRounds } = require("bcrypt")

module.exports = (sequelize, DataTypes)=> {

    const wallet = sequelize.define("wallet", {
        
        amount : {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        

    })

    wallet.associate = (models) => {
        wallet.belongsTo(models.members , {
            foreignKey:{
                name:"memberId",
                allowNull :false,

            },
            as : "wallets"
        })
    }

    wallet.associate = (models) => {
        wallet.belongsToMany(models.transaction , {
            through : "transaction_wallet",
            foreignKey: 'walletId',
            as :'transactions'
        })
        
    }

    return wallet

}


