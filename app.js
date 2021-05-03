const express = require("express")
const app = express()
const mongoose = require('mongoose')
const db = require('./db/staff')
const employee = mongoose.model('employee')
const controls = require('./controller/control')

mongoose.connect('mongodb://localhost/crud', {useNewUrlParser: true, useUnifiedTopology: true})


app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get("/employee/list", controls.requestList)

app.post("/employee/create", controls.createEmployee)

app.delete("/employee/:email", controls.deleteEmployee)

app.patch("/employee/:email", controls.editEmployee)

app.listen(5051, console.log('Rondando...'))