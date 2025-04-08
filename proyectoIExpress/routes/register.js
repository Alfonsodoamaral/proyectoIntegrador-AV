const express = require("express")
const route = express.Router()
const registerControllers = require("../controllers/registerControllers")

route.get("/register", registerControllersControllers.index)

module.exports = route