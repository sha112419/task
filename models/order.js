const { DataTypes } = require("sequelize");
const { sequelize, user } = require(".");

module.exports =(sequelize,DataTypes)=>{
    const order =sequelize.define("order",{
        amount: {
            type: DataTypes.FLOAT,
        },
        currency: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
    });
    order.belongsTo(user);

    return order
}