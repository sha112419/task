const express = require("express");
const { prototype } = require("module");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = 2425;

app.listen(port,() =>{
    console.log(`server is running on ${port}`)
})