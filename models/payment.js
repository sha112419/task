const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const order = require("./order");

module.exports =(sequelize,DataTypes)=>{
    const payment =sequelize.define("payment",{
        amount: {
            type: DataTypes.FLOAT,
        },
        currency: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        stripe_charge_id:{
            type: DataTypes.STRING,
        }
    });
    payment.belongsTo(order);
    
    return payment
}