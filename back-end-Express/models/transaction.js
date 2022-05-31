module.exports = (sequelize, DataTypes)=> {

    const transaction = sequelize.define("transaction", {
        
        name_NFT : {
            type: DataTypes.STRING,
            allowNull: false,
        },

        amount : {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        
        createdAt : {
            type: DataTypes.DATE,
            allowNull: false,

        },
    
    })

    transaction.associate = (models) => {
        transaction.belongsToMany(models.wallet, {
            through: "transaction_wallet",
            foreignKey: 'transactionId',
            as: 'wallets'
        })
    }
    transaction.associate = (models) => {
        transaction.hasMany(models.transation_tag, {

            foreignKey: {
                name : "transactionId",
                allowNull : false,

            } ,
            as : 'transation_tags'

        })
    }

    transaction.associate = (models) => {
        transaction.hasOne(models.transaction_object, {
            foreignKey : {
                name: 'transactionId',
                allowNull: false, 
            },
            as : "transaction_object"
        })
    }

    return transaction

}



