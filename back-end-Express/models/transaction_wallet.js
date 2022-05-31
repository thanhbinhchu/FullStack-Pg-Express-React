module.exports = (sequelize, DataTypes)=> {

    const transaction_wallet = sequelize.define('transaction_wallet', {
        
        transactionId : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        walletId : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },



    })

  
    return transaction_wallet

}



