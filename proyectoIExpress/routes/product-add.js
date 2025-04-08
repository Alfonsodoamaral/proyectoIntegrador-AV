const express = require("express")
const route = express.Router()
const productaddControllers = require("../controllers/product-addControllers")

route.get("/products/add", productaddControllers.index)

module.exports = route