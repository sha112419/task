const dbconfig = require("../config/dbconfig")
const{Sequelize, DataTypes} = require("sequelize");
const{ DB_PASSWORD } = require("../config/dbconfig");
// console.log("ahdsj",err)
const sequelize = new Sequelize(
    dbconfig.DB_NAME,
    dbconfig.DB_USER,
    dbconfig?.DB_PASSWORD,
    {
        host:dbconfig.DB_HOST,
        dialect:dbconfig.DB_dialect,
        operatorAliases: false,

        pool:{
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            ideal: dbconfig.pool.ideal,
        },
    }
);
// console.log("error",err)
sequelize.authenticate()
.then(()=> console.log("connected"))
.catch((err) => console.log("error"+ err));

db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize,DataTypes);

db.sequelize.sync({ force: true})
.then(() =>{
    console.log("yes, sync done")
})

module.exports = db;