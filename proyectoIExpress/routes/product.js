const express = require("express")
const route = express.Router()
const productControllers = require("../controllers/productControllers")

route.get("/detalle/:id", productControllers.index)
route.get("/agregar", productControllers.add_products)
route.post("/agregar", productControllers.nuevo_producto)
route.get("/search", productControllers.search_results)
route.post("/comentario", productControllers.procesarComentario)



module.exports = route