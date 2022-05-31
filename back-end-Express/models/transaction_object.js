module.exports = (sequelize, DataTypes)=> {

    const transaction_object = sequelize.define("transaction_object", {
        
        object : {
            type: DataTypes.STRING,
            allowNull: false,
        },


    })

    transaction_object.associate = (models) => {
        transaction_object.belongsTo(models.transaction, {
            foreignKey:{
                name: 'transactionId',
                allowNull: false,
            },
            as : 'transaction_object'
        })
    }

    return transaction_object

}



