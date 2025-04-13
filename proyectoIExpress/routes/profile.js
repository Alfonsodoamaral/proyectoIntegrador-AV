const express = require("express")
const route = express.Router()
const profileControllers = require("../controllers/profileControllers")

route.get("/profile", profileControllers.index)
route.get("/register", profileControllers.register)
route.get("/login", profileControllers.login)



module.exports = route