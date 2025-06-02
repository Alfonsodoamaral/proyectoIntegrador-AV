const express = require("express")
const route = express.Router()
const usersControllers = require("../controllers/usersControllers")

route.get("/login", usersControllers.login)
route.post("/processLogin", usersControllers.processLogin); 
route.get("/logout", usersControllers.processLogout)


route.get("/perfil", usersControllers.profile)
route.post("/perfil", usersControllers.profile)
route.get("/perfil/:id", usersControllers.profile_id)


route.get("/register", usersControllers.register)
route.post("/processRegister", usersControllers.processRegister)





module.exports = route