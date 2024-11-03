const mongoose = require("mongoose")
const stuschema = new mongoose.Schema({
    rollno:{
        type:Number,
        require: true
    },
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:Number,
        require: true
    }
})

module.exports = mongoose.model("student",stuschema)