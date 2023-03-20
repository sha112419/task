const { DataTypes } = require("sequelize");
const { sequelize } = require("../models/indexz");

module.exports =(sequelize,DataTypes)=>{
    const User =sequelize.define("user",{
        firstname: {
            type: DataTypes.STRING,
        },
        lastname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password:{
            type: DataTypes.STRING,
        }
    });
    return User
}