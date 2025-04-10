const express = require("express")
const route = express.Router()
const productsControllers = require("../controllers/prouctControllers")

route.get("/products", productsControllers.index)
route.get("/products/add", productaddControllers.index)


module.exports = route