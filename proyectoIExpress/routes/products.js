const express = require("express")
const route = express.Router()
const productsController = require("../controllers/productControllers")

route.get("/", productsController.list);
route.get("/:id", productsController.detalle);
route.get("/add", productsController.add)
route.get("/search", productsController.search)

module.exports = route