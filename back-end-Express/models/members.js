module.exports = (sequelize, DataTypes)=> {

    const members = sequelize.define("members", {
        
        first_name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        username : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    members.associate = (models) => {
        members.hasMany(models.wallet, {
            foreignKey:{
                name : 'memberId',
                allowNull:false,

            },
            as : 'wallets'
        })
    }
    return members

}

