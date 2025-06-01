const express = require("express")
const route = express.Router()
const indexControllers = require("../controllers/indexControllers")

route.get("/", indexControllers.index)



module.exports = route