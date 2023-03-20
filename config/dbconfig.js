module.exports ={
    DB_HOST:"localhost",
    DB_USER:"root",
    DB_NAME:"task1",
    DB_PASSWORD:"",
    DB_dialect:"mysql",

    pool:{
        max:5,
        min:0,
        acquire: 30000,
        ideal: 10000
    }
}
