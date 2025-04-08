const express = require("express")
const route = express.Router()
const productsControllers = require("../controllers/prouctControllers")

route.get("/products", productsControllers.index)

module.exports = route