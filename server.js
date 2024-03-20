const express = require('express')
const DBconnect = require('./DBconnect')
const cors=require('cors')
const mongoose=require("mongoose")
const rout=require('./routing')
const app=express()
app.use(express.json())

app.use(cors())

DBconnect()


app.get('/companyname',rout.company)
app.get('/ownername',rout.owner)
app.get('/rollno',rout.no)
app.get('/emailid',rout.email)
app.get('/accesscode',rout.access)






app.listen(4000,()=>{
    console.log("SERVER STARTED!!!");
})