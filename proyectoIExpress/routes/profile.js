const express = require("express")
const route = express.Router()
const profileControllers = require("../controllers/profileControllers")

route.get("/profile", profileControllers.index)

module.exports = route