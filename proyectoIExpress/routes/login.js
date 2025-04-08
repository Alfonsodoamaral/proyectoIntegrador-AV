const express = require("express")
const route = express.Router()
const indexControllers = require("../controllers/loginControllers")

route.get("/login", loginControllers.index)

module.exports = route