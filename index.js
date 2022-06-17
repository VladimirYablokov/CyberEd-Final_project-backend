const express = require('express');
require('dotenv').config();
require('./models/models')

const sequelize = require('./db');
const PORT = process.env.PORT
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

const start = async () =>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ()=>{
            console.log('server started!')
        })
    }catch(ERROR){
            console.log(error)
        }
}
start();
