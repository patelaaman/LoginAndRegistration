const express = require("express")
const route = express.Router();
const Stucontroller = require("../Controller/stuController")
route.post("/sturegis",Stucontroller.Registration)
route.post("/stulogin",Stucontroller.Login)

module.exports = route;