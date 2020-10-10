const mongoose = require('mongoose')
//引入express
const express = require('express')
const app = express()
//处理json
app.use(express.json())
//监听3001
app.listen(3001,() => {
    console.log('http://localhost:3001')
})
//定义路径/
 app.get('/', async(req,res) => {
     res.send('ok')
 })