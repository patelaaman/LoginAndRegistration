const express = require("express")
const App = express();
const dotenv = require("dotenv").config();
const Sturoute = require("./routes/stuRoute")
const bodyparser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("DataBase Succesfully Connected")
})
const port = process.env.PORT || 3000
App.use(cors())
// Body-parser middleware
App.use(bodyparser.urlencoded({ extended: true }))
App.use(bodyparser.json())
App.use("/stu",Sturoute)
App.listen(port,()=>{
    console.log(`Server Run On Port ${port} !!!`)
})