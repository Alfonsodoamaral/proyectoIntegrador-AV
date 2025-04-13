const express = require("express")
const route = express.Router()
const productsControllers = require("../controllers/productControllers")

route.get("/", productsControllers.index)
route.get("/add", productsControllers.add_products)


module.exports = route