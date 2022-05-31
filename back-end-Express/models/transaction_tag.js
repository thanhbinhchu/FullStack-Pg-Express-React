module.exports = (sequelize, DataTypes)=> {

    const transaction_tag = sequelize.define("transaction_tag", {
        
        label : {
            type: DataTypes.STRING,
            allowNull: false,
        },

    

    })
    
    transaction_tag.associate = (models) => {
        transaction_tag.belongsTo(models.transaction, {
            foreignKey :{
                name : 'transactionId',
                allowNull: false,
            },
            as : 'transation_tags'
        })
    }



    return transaction_tag

}

