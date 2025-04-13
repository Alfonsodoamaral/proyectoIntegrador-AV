const express = require("express")
const route = express.Router()
const productsControllers = require("../controllers/productControllers")

route.get("/products", productsControllers.index)
route.get("/products/add", productsControllers.add_products)


module.exports = route