const express = require("express")
const route = express.Router()
const profileControllers = require("../controllers/profileControllers")

route.get("/profile", profileControllers.index)
route.get("/register", registerControllersControllers.index)
route.get("/login", loginControllers.index)



module.exports = route