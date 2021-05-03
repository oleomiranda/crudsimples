const mongoose = require("mongoose")
const Schema = mongoose.Schema
const employee = new Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});



mongoose.model('employee', employee)