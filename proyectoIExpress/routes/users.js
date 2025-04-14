const express = require("express")
const route = express.Router()
const usersControllers = require("../controllers/usersControllers")

route.get("/perfil", usersControllers.index)
route.get("/register", usersControllers.register)
route.get("/login", usersControllers.login)



module.exports = route